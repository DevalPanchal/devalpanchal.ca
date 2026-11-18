"use client";

import { useEffect, useRef } from "react";

/**
 * Renders a name as a cloud of 3D points (three.js, lazy-loaded).
 * - Entrance: points fly in from a wide 3D swirl and assemble into the letters.
 * - Idle: the assembled name sits still on a crisp, whole-pixel square grid, each square
 *   coloured like a day on a GitHub contribution graph (real data, baked in at build).
 * - Cursor: a black hole. Squares are pushed out of an empty core and crowd into a rim
 *   that swirls around the pointer like an accretion disk, lighting up bright green.
 * Under prefers-reduced-motion the name appears assembled and stays still.
 */

interface ParticleNameProps {
	lines: string[];
	/** Vertical centre of the name, as a fraction of the canvas height (0 = top). */
	centerY?: number;
	/** Contribution levels (0-4), one digit per day from a Sunday onward, as GitHub orders them. */
	levels?: string;
	/** Five colours for levels 0-4. */
	palette?: string[];
	/** Colour the squares take as they crowd into the black hole's rim. */
	rimColor?: string;
	onReady?: () => void;
	onFail?: () => void;
	className?: string;
}

const VERT = /* glsl */ `
	uniform float uTime;
	uniform float uPixelRatio;
	uniform float uSize;
	uniform vec2 uMouse;
	uniform float uMouseStrength;
	uniform float uRadius;
	uniform float uMotion;

	attribute vec3 aStart;
	attribute float aDelay;
	attribute float aRand;
	attribute vec3 aColor;

	varying float vAlpha;
	varying float vMix;
	varying vec3 vColor;

	float easeOutCubic(float t) { return 1.0 - pow(1.0 - t, 3.0); }

	void main() {
		float t = clamp((uTime - aDelay) / 1.4, 0.0, 1.0);
		float e = easeOutCubic(t);

		// Fly in along a curved path: swirl around the z axis while approaching.
		vec3 p = mix(aStart, position, e);
		float swirl = (1.0 - e) * 2.4 * (aRand - 0.5);
		float c = cos(swirl), s = sin(swirl);
		p.xy = mat2(c, -s, s, c) * p.xy;

		// Black hole at the cursor: push every square inside the radius outward so the core
		// is empty and the squares crowd into a rim, then swirl the rim around the cursor.
		// Inner squares turn faster than outer ones, which shears the rim into a spiral.
		vec2 d = p.xy - uMouse;
		float dist = length(d);
		float f = smoothstep(uRadius, 0.0, dist) * uMouseStrength * e;
		vec2 dir = d / max(dist, 1e-4);
		float r = dist + f * uRadius * 0.6;
		float ang = f * (0.9 + uTime * 0.8 * uMotion);
		float ca = cos(ang), sa = sin(ang);
		dir = mat2(ca, -sa, sa, ca) * dir;
		p.xy = mix(p.xy, uMouse + dir * r, step(0.0001, f));

		vec4 mv = modelViewMatrix * vec4(p, 1.0);
		gl_Position = projectionMatrix * mv;
		// uSize is the CSS-pixel size at the resting depth (camera z = 10); snap to whole
		// device pixels so every square has hard edges.
		gl_PointSize = max(1.0, floor(uSize * uPixelRatio * (10.0 / -mv.z) + 0.5));

		vAlpha = smoothstep(0.0, 0.3, t);
		vMix = f;
		vColor = aColor;
	}
`;

const FRAG = /* glsl */ `
	uniform vec3 uRim;
	varying float vAlpha;
	varying float vMix;
	varying vec3 vColor;

	void main() {
		// Solid square (the point sprite itself), no soft edge. Squares caught in the
		// black hole's rim light up toward the rim colour.
		vec3 col = mix(vColor, uRim, smoothstep(0.05, 0.45, vMix));
		gl_FragColor = vec4(col, vAlpha);
		// THREE.Color values are linear; convert back to the screen's sRGB so hex colours match.
		#include <colorspace_fragment>
	}
`;

function renderText(lines: string[], fontFamily: string) {
	// Draw the text big on an offscreen canvas; we sample its filled pixels on a grid later.
	const W = 1600;
	const lineH = 260;
	const H = lineH * lines.length + 40;
	const cnv = document.createElement("canvas");
	cnv.width = W;
	cnv.height = H;
	const ctx = cnv.getContext("2d", { willReadFrequently: true });
	if (!ctx) return null;

	let fontSize = 240;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	const setFont = () => (ctx.font = `800 ${fontSize}px ${fontFamily}`);
	setFont();
	const widest = Math.max(...lines.map((l) => ctx.measureText(l).width));
	if (widest > W * 0.96) {
		fontSize *= (W * 0.96) / widest;
		setFont();
	}
	ctx.fillStyle = "#fff";
	lines.forEach((l, i) => ctx.fillText(l, W / 2, 20 + lineH * i + lineH / 2));

	const data = ctx.getImageData(0, 0, W, H).data;
	let minX = W, maxX = 0, minY = H, maxY = 0;
	for (let y = 0; y < H; y++) {
		for (let x = 0; x < W; x++) {
			if (data[(y * W + x) * 4 + 3] > 128) {
				if (x < minX) minX = x;
				if (x > maxX) maxX = x;
				if (y < minY) minY = y;
				if (y > maxY) maxY = y;
			}
		}
	}
	return { data, W, H, minX, maxX, minY, maxY };
}

/** Sample the rendered text on an exact grid of `cols` columns; points are normalised to width 1. */
function sampleGrid(r: NonNullable<ReturnType<typeof renderText>>, cols: number) {
	const { data, W, minX, maxX, minY, maxY } = r;
	const step = (maxX - minX) / cols;
	const cx = (minX + maxX) / 2;
	const cy = (minY + maxY) / 2;
	const scale = 1 / (maxX - minX);
	const pts: number[] = [];
	const cells: number[] = []; // [col, row] per point, for the contribution colouring
	let row = 0;
	for (let y = minY + step / 2; y <= maxY; y += step, row++) {
		let col = 0;
		for (let x = minX + step / 2; x <= maxX; x += step, col++) {
			const ix = Math.round(x), iy = Math.round(y);
			if (data[(iy * W + ix) * 4 + 3] > 128) {
				pts.push((x - cx) * scale, -(y - cy) * scale);
				cells.push(col, row);
			}
		}
	}
	return { pts, cells };
}

/**
 * GitHub's contribution greens (Primer's brighter dark-theme scale). Level 0 is lifted from
 * GitHub's near-black so the letters stay readable on the hero's near-black ground.
 */
export const GITHUB_PALETTE = ["#4a525d", "#1b7a36", "#2ea043", "#3fb950", "#56d364"];

/**
 * Lay the contribution calendar over the name exactly as GitHub draws it: columns are weeks,
 * rows are weekdays (Sunday on top). The rightmost grid column is the most recent week, and the
 * calendar repeats leftward (and every 7 rows downward) to cover the whole name.
 */
function levelFor(col: number, row: number, cols: number, levels: string) {
	if (!levels) {
		// No data: a plausible spread, mostly empty with some activity.
		const r = Math.random();
		return r < 0.62 ? 0 : r < 0.78 ? 1 : r < 0.9 ? 2 : r < 0.97 ? 3 : 4;
	}
	const weeks = Math.ceil(levels.length / 7);
	const week = weeks - 1 - ((cols - 1 - col) % weeks);
	const idx = week * 7 + (row % 7);
	return idx < levels.length ? Number(levels[idx]) : 0;
}

export default function ParticleName({
	lines,
	centerY = 0.42,
	levels = "",
	palette = GITHUB_PALETTE,
	rimColor = "#7ee787",
	onReady,
	onFail,
	className = "",
}: ParticleNameProps) {
	const mountRef = useRef<HTMLDivElement>(null);
	const linesKey = lines.join("\n");

	useEffect(() => {
		const mount = mountRef.current;
		if (!mount) return;
		let disposed = false;
		let cleanup = () => {};

		(async () => {
			const THREE = await import("three");
			if (disposed) return;

			const probe = document.createElement("canvas");
			if (!(probe.getContext("webgl2") || probe.getContext("webgl"))) {
				onFail?.();
				return;
			}

			await document.fonts?.ready;
			if (disposed) return;

			const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			const finePointer = window.matchMedia("(pointer: fine)").matches;

			let renderer: InstanceType<typeof THREE.WebGLRenderer>;
			try {
				renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
			} catch {
				onFail?.();
				return;
			}
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setClearColor(0x000000, 0);
			renderer.domElement.setAttribute("aria-hidden", "true");
			renderer.domElement.style.display = "block";
			renderer.domElement.style.width = "100%";
			renderer.domElement.style.height = "100%";
			mount.appendChild(renderer.domElement);

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
			camera.position.set(0, 0, 10);

			const group = new THREE.Group();
			scene.add(group);

			const uniforms = {
				uTime: { value: reduceMotion ? 100 : 0 },
				uPixelRatio: { value: renderer.getPixelRatio() },
				uSize: { value: 40 },
				uMouse: { value: new THREE.Vector2(999, 999) },
				uMouseStrength: { value: 0 },
				uRadius: { value: 0.6 },
				uMotion: { value: reduceMotion ? 0 : 1 },
				uRim: { value: new THREE.Color(rimColor) },
			};
			const material = new THREE.ShaderMaterial({
				vertexShader: VERT,
				fragmentShader: FRAG,
				uniforms,
				transparent: true,
				depthWrite: false,
				blending: THREE.NormalBlending,
			});

			const fontFamily = getComputedStyle(document.body).fontFamily || "sans-serif";
			const rendered = renderText(lines, fontFamily);
			let points: InstanceType<typeof THREE.Points> | null = null;
			let nameWidth = 1;
			let nameCenterY = 0;

			const visibleSize = () => {
				const h = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
				return { w: h * camera.aspect, h };
			};

			const build = (animateIn: boolean) => {
				const { w: vw, h: vh } = visibleSize();
				const mobile = mount.clientWidth < 640;
				if (!rendered) return;
				const aspect = (rendered.maxY - rendered.minY) / (rendered.maxX - rendered.minX);

				// Fit the name (88% of width on phones, 72% on desktop, at most 42% of height),
				// then choose a whole-pixel grid pitch so every gap is identical.
				const pxPerWorld = mount.clientHeight / vh;
				const fitWidthPx = Math.min(vw * (mobile ? 0.88 : 0.72), (vh * 0.42) / aspect) * pxPerWorld;
				const pitch = mobile ? 4 : fitWidthPx > 900 ? 6 : 5;
				const cols = Math.floor(fitWidthPx / pitch);
				const { pts, cells } = sampleGrid(rendered, cols);
				nameWidth = (cols * pitch) / pxPerWorld;
				nameCenterY = vh * (0.5 - centerY);
				const spacingPxFit = pitch;

				const n = pts.length / 2;
				const pos = new Float32Array(n * 3);
				const start = new Float32Array(n * 3);
				const delay = new Float32Array(n);
				const rand = new Float32Array(n);
				const colors = new Float32Array(n * 3);
				const swatches = palette.map((c) => new THREE.Color(c));
				for (let i = 0; i < n; i++) {
					const lvl = levelFor(cells[i * 2], cells[i * 2 + 1], cols, levels);
					swatches[lvl].toArray(colors, i * 3);

					const x = pts[i * 2] * nameWidth;
					const y = pts[i * 2 + 1] * nameWidth + nameCenterY;
					pos[i * 3] = x;
					pos[i * 3 + 1] = y;
					pos[i * 3 + 2] = 0;

					// Start on a wide shell around the scene, biased toward the camera for depth.
					const theta = Math.random() * Math.PI * 2;
					const phi = Math.acos(2 * Math.random() - 1);
					const r = 6 + Math.random() * 6;
					start[i * 3] = r * Math.sin(phi) * Math.cos(theta);
					start[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
					start[i * 3 + 2] = r * Math.cos(phi) * 0.8 - 2;

					// Sweep left to right with jitter so the letters assemble in order.
					const nx = pts[i * 2] + 0.5;
					delay[i] = animateIn ? 0.1 + nx * 0.7 + Math.random() * 0.3 : -10;
					rand[i] = Math.random();
				}

				const geo = new THREE.BufferGeometry();
				geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
				geo.setAttribute("aStart", new THREE.BufferAttribute(start, 3));
				geo.setAttribute("aDelay", new THREE.BufferAttribute(delay, 1));
				geo.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));
				geo.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));

				if (points) {
					points.geometry.dispose();
					group.remove(points);
				}
				points = new THREE.Points(geo, material);
				points.frustumCulled = false;
				group.add(points);

				// Point size scales with the name so density looks the same at every width.
				// Squares fill ~65% of each grid cell, leaving a clean gap.
				uniforms.uSize.value = Math.max(2, Math.round(spacingPxFit * 0.65));
				uniforms.uRadius.value = nameWidth * 0.12;
			};

			const resize = () => {
				const w = mount.clientWidth;
				const h = mount.clientHeight;
				renderer.setSize(w, h, false);
				camera.aspect = w / h;
				camera.updateProjectionMatrix();
			};

			resize();
			build(!reduceMotion);
			onReady?.();

			// Pointer → world coordinates on the z=0 plane.
			const target = new THREE.Vector2(999, 999);
			let strengthTarget = 0;
			const onMove = (e: PointerEvent) => {
				const rect = mount.getBoundingClientRect();
				const nx = (e.clientX - rect.left) / rect.width;
				const ny = (e.clientY - rect.top) / rect.height;
				if (nx < 0 || nx > 1 || ny < 0 || ny > 1) {
					strengthTarget = 0;
					return;
				}
				const { w, h } = visibleSize();
				target.set((nx - 0.5) * w, (0.5 - ny) * h);
				strengthTarget = 1;
			};
			const onLeave = () => {
				strengthTarget = 0;
			};
			if (finePointer && !reduceMotion) {
				window.addEventListener("pointermove", onMove, { passive: true });
				document.documentElement.addEventListener("pointerleave", onLeave);
			}

			let resizeTimer: ReturnType<typeof setTimeout> | undefined;
			let lastW = mount.clientWidth;
			const ro = new ResizeObserver(() => {
				resize();
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(() => {
					// Rebuild only on width changes (mobile URL-bar height changes shouldn't re-sample).
					if (Math.abs(mount.clientWidth - lastW) > 40) {
						lastW = mount.clientWidth;
						build(false);
					}
				}, 150);
			});
			ro.observe(mount);

			// Only render while visible.
			let visible = true;
			const io = new IntersectionObserver(([entry]) => {
				visible = entry.isIntersecting;
				if (visible && !raf) loop();
			});
			io.observe(mount);

			const clock = new THREE.Clock();
			const startedAt = performance.now();
			let raf = 0;
			const loop = () => {
				if (!visible || document.hidden) {
					raf = 0;
					return;
				}
				const dt = Math.min(clock.getDelta(), 0.05);
				if (!reduceMotion) uniforms.uTime.value = (performance.now() - startedAt) / 1000;

				// Ease mouse position and strength so points spring rather than snap.
				const m = uniforms.uMouse.value;
				if (m.x > 900) m.copy(target);
				m.lerp(target, 1 - Math.pow(0.0001, dt));
				uniforms.uMouseStrength.value += (strengthTarget - uniforms.uMouseStrength.value) * (1 - Math.pow(0.002, dt));


				renderer.render(scene, camera);
				raf = requestAnimationFrame(loop);
			};
			const onVisibility = () => {
				if (!document.hidden && visible && !raf) {
					clock.getDelta();
					loop();
				}
			};
			document.addEventListener("visibilitychange", onVisibility);
			loop();

			cleanup = () => {
				cancelAnimationFrame(raf);
				clearTimeout(resizeTimer);
				ro.disconnect();
				io.disconnect();
				window.removeEventListener("pointermove", onMove);
				document.documentElement.removeEventListener("pointerleave", onLeave);
				document.removeEventListener("visibilitychange", onVisibility);
				points?.geometry.dispose();
				material.dispose();
				renderer.dispose();
				renderer.domElement.remove();
			};
		})();

		return () => {
			disposed = true;
			cleanup();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [linesKey, centerY, levels, rimColor]);

	return <div ref={mountRef} className={className} />;
}
