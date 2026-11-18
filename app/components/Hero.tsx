"use client";

import React, { useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import ParticleName from "./ParticleName";
import FlipTitle from "./FlipTitle";
import contributions from "../data/github-contributions.json";

const BG = "#050706";
const GREEN = "#2dd17a";
const INK = "#f4f7f4";
const TITLES = ["Full Stack Engineer", "Software Developer", "Data Engineer", "Mobile / iOS Developer"];

export default function Hero() {
	const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");

	return (
		<section
			aria-label="Introduction"
			className="relative isolate flex h-[100svh] min-h-[560px] flex-col items-center justify-end overflow-hidden text-white"
			style={{ background: BG }}
		>
			{/* Soft neutral light behind the name, and a faint grid that fades out from the centre */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute left-1/2 top-[40%] -z-10 h-[70vh] w-[110vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05] blur-3xl"
				style={{ background: "radial-gradient(closest-side, #ffffff, transparent)" }}
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
					maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)",
					WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)",
				}}
			/>

			<ParticleName
				lines={["DEVAL", "PANCHAL"]}
				centerY={0.38}
				levels={contributions.levels}
				onReady={() => setStatus("ready")}
				onFail={() => setStatus("failed")}
				className="absolute inset-0 -z-0"
			/>

			{/* The particles draw the name; this h1 carries it for screen readers, search, and the no-WebGL fallback. */}
			<h1
				className={
					status === "failed"
						? "absolute left-1/2 top-[38%] w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-8xl"
						: "sr-only"
				}
				style={status === "failed" ? { color: INK } : undefined}
			>
				Deval <br aria-hidden="true" />
				Panchal
			</h1>

			<div className="hero-actions relative z-10 flex w-full flex-col items-center gap-8 px-4 pb-[12svh] sm:gap-10">
				<FlipTitle
					titles={TITLES}
					className="font-mono text-base font-medium uppercase tracking-[0.12em] text-white/70 sm:text-xl"
				/>
				<div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
				<a
					href="#about"
					className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
					style={{ background: GREEN, color: "#03150c", outlineColor: GREEN, boxShadow: `0 10px 40px -12px ${GREEN}` }}
				>
					View my work
					<ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
				</a>
				<a
					href="/resume/Deval_Panchal_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold backdrop-blur-sm transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
					style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)", outlineColor: GREEN }}
				>
					<Download className="h-4 w-4" aria-hidden="true" />
					Download resume
				</a>
				</div>
			</div>

			<style jsx>{`
				.hero-actions {
					opacity: 0;
					transform: translateY(16px);
					animation: heroActionsIn 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) 1.9s forwards;
				}
				@keyframes heroActionsIn {
					to {
						opacity: 1;
						transform: none;
					}
				}
				@media (prefers-reduced-motion: reduce) {
					.hero-actions {
						animation: none;
						opacity: 1;
						transform: none;
					}
				}
			`}</style>
		</section>
	);
}
