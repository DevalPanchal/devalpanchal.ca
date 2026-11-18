"use client";

import { useEffect, useState } from "react";

interface FlipTitleProps {
	titles: string[];
	/** Time each title stays on screen, in ms. */
	interval?: number;
	/** Delay before the first flip, in ms (lets the hero entrance finish). */
	startDelay?: number;
	className?: string;
}

const STAGGER_MS = 28;

/**
 * Split-flap style rotating title. Every character sits in a fixed-width slot
 * (monospace), and on each change the slots flip on their X axis one after
 * another, left to right, from the old character to the new one.
 */
export default function FlipTitle({ titles, interval = 3200, startDelay = 2600, className = "" }: FlipTitleProps) {
	const width = Math.max(...titles.map((t) => t.length));
	const pad = (t: string) => {
		const left = Math.floor((width - t.length) / 2);
		return (" ".repeat(left) + t).padEnd(width, " ");
	};

	const [index, setIndex] = useState(0);
	const [prev, setPrev] = useState<number | null>(null);
	const [cycle, setCycle] = useState(0);
	const [reduceMotion, setReduceMotion] = useState(false);

	useEffect(() => {
		setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}, []);

	useEffect(() => {
		let timer: ReturnType<typeof setInterval> | undefined;
		const advance = () => {
			if (document.hidden) return;
			setIndex((i) => {
				setPrev(i);
				return (i + 1) % titles.length;
			});
			setCycle((c) => c + 1);
		};
		const start = setTimeout(() => {
			advance();
			timer = setInterval(advance, interval);
		}, startDelay);
		return () => {
			clearTimeout(start);
			if (timer) clearInterval(timer);
		};
	}, [titles.length, interval, startDelay]);

	const current = pad(titles[index]);
	const previous = prev === null ? null : pad(titles[prev]);

	return (
		<p className={className}>
			<span className="sr-only">{titles.join(", ")}</span>
			<span aria-hidden="true" className="flip-row">
				{current.split("").map((ch, i) => {
					const old = previous?.[i];
					const changed = !reduceMotion && previous !== null && old !== ch;
					const delay = `${i * STAGGER_MS}ms`;
					return (
						<span key={i} className="flip-slot">
							{changed ? (
								<>
									<span key={`out-${cycle}`} className="flip-char flip-out" style={{ animationDelay: delay }}>
										{old === " " ? " " : old}
									</span>
									<span key={`in-${cycle}`} className="flip-char flip-in" style={{ animationDelay: delay }}>
										{ch === " " ? " " : ch}
									</span>
								</>
							) : (
								<span className="flip-char">{ch === " " ? " " : ch}</span>
							)}
						</span>
					);
				})}
			</span>

			<style jsx>{`
				.flip-row {
					display: inline-flex;
					perspective: 600px;
					white-space: pre;
				}
				.flip-slot {
					position: relative;
					display: inline-block;
					width: 1ch;
					text-align: center;
					transform-style: preserve-3d;
				}
				.flip-char {
					display: inline-block;
					backface-visibility: hidden;
					transform-origin: 50% 50% -0.35em;
				}
				.flip-out {
					position: absolute;
					inset: 0;
					animation: flipOut 220ms cubic-bezier(0.55, 0, 0.75, 0.2) both;
				}
				.flip-in {
					animation: flipIn 320ms cubic-bezier(0.2, 0.7, 0.3, 1.15) both;
					animation-delay: inherit;
				}
				@keyframes flipOut {
					from {
						transform: rotateX(0deg);
						opacity: 1;
					}
					to {
						transform: rotateX(90deg);
						opacity: 0;
					}
				}
				@keyframes flipIn {
					0%,
					40% {
						transform: rotateX(-90deg);
						opacity: 0;
					}
					100% {
						transform: rotateX(0deg);
						opacity: 1;
					}
				}
			`}</style>
		</p>
	);
}
