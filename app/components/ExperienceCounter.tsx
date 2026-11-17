"use client";

import { useEffect, useState } from "react";
import { CAREER_START } from "../data/experiences";

const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000;

function yearsSince(start: Date) {
	return (Date.now() - start.getTime()) / MS_PER_YEAR;
}

interface ExperienceCounterProps {
	decimals?: number;
	className?: string;
}

/**
 * Live-ticking count of years of professional experience since CAREER_START.
 * Renders after mount (static export has no request-time clock), ticks every
 * frame, and drops to a once-per-second update when the user prefers reduced motion.
 */
export default function ExperienceCounter({ decimals = 8, className = "" }: ExperienceCounterProps) {
	const [years, setYears] = useState<number | null>(null);

	useEffect(() => {
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let frame = 0;
		let interval: ReturnType<typeof setInterval> | undefined;

		const tick = () => setYears(yearsSince(CAREER_START));
		tick();

		if (reduceMotion) {
			interval = setInterval(tick, 1000);
		} else {
			const loop = () => {
				tick();
				frame = requestAnimationFrame(loop);
			};
			frame = requestAnimationFrame(loop);
		}

		return () => {
			cancelAnimationFrame(frame);
			if (interval) clearInterval(interval);
		};
	}, []);

	const [whole, fraction] = (years ?? 0).toFixed(decimals).split(".");

	return (
		<span
			className={`tabular-nums transition-opacity duration-500 ${years === null ? "opacity-0" : "opacity-100"} ${className}`}
			aria-label={years === null ? undefined : `${Math.floor(years)} plus years of experience`}
		>
			<span aria-hidden="true">
				{whole}
				{fraction !== undefined && (
					<>
						.<span className="opacity-60">{fraction}</span>
					</>
				)}
			</span>
		</span>
	);
}
