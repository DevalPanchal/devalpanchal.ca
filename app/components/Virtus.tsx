"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Flame, Sparkles, Trophy } from "lucide-react";
import { VIRTUS_APP_STORE_URL, VIRTUS_SITE_URL } from "../data/mobileApps";

// Palette lifted from the Virtus landing page so the section reads as the app's own world.
const V = {
	bg: "#050706",
	card: "#101412",
	cardHi: "#1c2320",
	line: "rgba(255,255,255,0.08)",
	text: "#f4f7f4",
	muted: "#9ca49f",
	green: "#2dd17a",
	greenDeep: "#18995b",
	gold: "#ffc94d",
	mind: "#a06bff",
	heart: "#ec4d8a",
	strength: "#f5a524",
	disc: "#4a90e2",
};

const SHOT = { width: 555, height: 1200 };

const features = [
	{
		id: "streaks",
		label: "Streaks",
		title: "Watch every day add up",
		body: "A full-history heatmap per habit lights up as you keep showing up, so consistency is something you can see.",
		image: "/images/virtus/home-heatmap.jpg",
		alt: "Virtus home screen showing a level 7 progress bar, daily quests, and colour-coded streak heatmaps for weightlifting and reading",
		accent: V.green,
	},
	{
		id: "quests",
		label: "Daily quests",
		title: "Fresh objectives, every day",
		body: "Three rotating quests give each day a reason to open the app and bank bonus XP for finishing them.",
		image: "/images/virtus/home-list.jpg",
		alt: "Virtus habit list with daily quest progress and habits ready to check off",
		accent: V.gold,
	},
	{
		id: "expeditions",
		label: "Expeditions",
		title: "Guided multi-day journeys",
		body: "Programs like The Monk's Retreat and Deep Work Mastery add a new practice each day, and finishing one leaves you with a permanent habit and bonus XP.",
		image: "/images/virtus/paths.jpg",
		alt: "Virtus expeditions screen listing guided multi-day journeys",
		accent: V.mind,
	},
	{
		id: "attributes",
		label: "Attributes",
		title: "Six attributes. One you.",
		body: "Every habit feeds a core stat (Mind, Intelligence, Strength, Body, Heart, or Discipline) and the radar shows who you're becoming.",
		image: "/images/virtus/stats-radar.jpg",
		alt: "Virtus radar chart of six character attributes",
		accent: V.heart,
	},
	{
		id: "ranks",
		label: "Levels & ranks",
		title: "Level up a real character",
		body: "Nine ranked tiers, from Novice Adventurer to Ascendant Avatar, turn long-term progress into something worth chasing.",
		image: "/images/virtus/rank-cards.jpg",
		alt: "Virtus rank cards showing tiers from Novice Adventurer upward",
		accent: V.disc,
	},
];

const stats = [
	{ value: "5★", label: "App Store rating" },
	{ value: "3,500+", label: "App Store impressions" },
	{ value: "128", label: "Achievements to earn" },
	{ value: "Crash-free", label: "Monitored with Sentry" },
];

const engineering = [
	{
		tag: "Architecture",
		title: "React Native + Expo, TypeScript end to end",
		body: "Designed the XP, quest, and attribute progression system with persistent local state, built to stay fast on a dark, animation-heavy UI.",
	},
	{
		tag: "Monetization",
		title: "RevenueCat subscription billing",
		body: "A free tier plus Premium at $1.99/mo or $19.99/yr, with entitlement gating and a custom paywall wired through RevenueCat.",
	},
	{
		tag: "Release",
		title: "EAS build-and-submit pipeline",
		body: "Owned the whole path to production: EAS builds, App Store Connect, App Review submissions, and every update since launch.",
	},
	{
		tag: "Observability",
		title: "Sentry + PostHog feedback loop",
		body: "Sentry error data, PostHog analytics, and user-reported issues decide what ships next, which is how the app has stayed crash-free.",
	},
];

const gallery = [
	{ src: "/images/virtus/journey-profile.jpg", alt: "Virtus journey profile screen" },
	{ src: "/images/virtus/character-stats.jpg", alt: "Virtus character stats screen" },
	{ src: "/images/virtus/achievements.jpg", alt: "Virtus achievements grid" },
	{ src: "/images/virtus/new-habit.jpg", alt: "Virtus create-a-habit screen with icon, colour, and attribute pickers" },
	{ src: "/images/virtus/customize.jpg", alt: "Virtus customization settings" },
];

function Phone({
	src,
	alt,
	priority = false,
	className = "",
}: {
	src: string;
	alt: string;
	priority?: boolean;
	className?: string;
}) {
	return (
		<div
			className={`relative rounded-[2.6rem] p-[7px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ${className}`}
			style={{
				background: "linear-gradient(160deg, #2a302d 0%, #0d100e 45%, #1c2320 100%)",
				boxShadow: `inset 0 0 0 1px ${V.line}`,
			}}
		>
			<Image
				src={src}
				alt={alt}
				width={SHOT.width}
				height={SHOT.height}
				priority={priority}
				className="block h-auto w-full rounded-[2.1rem]"
			/>
		</div>
	);
}

function Eyebrow({ children }: { children: React.ReactNode }) {
	return (
		<span className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: V.green }}>
			{children}
		</span>
	);
}

export default function Virtus() {
	const [active, setActive] = useState(0);
	const reduceMotion = useReducedMotion();

	const heroRef = React.useRef(null);
	const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

	const reveal = {
		hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } },
	};

	const feature = features[active];

	const onTabKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
		e.preventDefault();
		const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
		const next = (active + dir + features.length) % features.length;
		setActive(next);
		document.getElementById(`virtus-tab-${features[next].id}`)?.focus();
	};

	return (
		<section
			id="virtus"
			aria-labelledby="virtus-title"
			className="relative isolate overflow-hidden py-24 md:py-32"
			style={{ background: V.bg, color: V.text }}
		>
			{/* Ambient glow */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[640px] w-[1100px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
				style={{ background: `radial-gradient(closest-side, ${V.green}55, transparent)` }}
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
				style={{
					backgroundImage: `linear-gradient(${V.line} 1px, transparent 1px), linear-gradient(90deg, ${V.line} 1px, transparent 1px)`,
					backgroundSize: "56px 56px",
					maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
					WebkitMaskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
				}}
			/>

			<div className="mx-auto max-w-6xl px-4 md:px-8">
				{/* ── Intro ───────────────────────────────────────── */}
				<motion.div
					ref={heroRef}
					initial="hidden"
					animate={heroInView ? "visible" : "hidden"}
					variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
					className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]"
				>
					<div>
						<motion.div variants={reveal} className="mb-8 flex items-center gap-3">
							<Image
								src="/images/virtus/virtus-icon.png"
								alt=""
								width={48}
								height={48}
								className="rounded-xl"
								style={{ boxShadow: `0 0 0 1px ${V.line}, 0 10px 30px -10px ${V.green}80` }}
							/>
							<Eyebrow>Featured project · Live on the App Store</Eyebrow>
						</motion.div>

						<motion.h2
							id="virtus-title"
							variants={reveal}
							className="text-[2.75rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl xl:text-[4rem]"
						>
							Build the habits.
							<br />
							<span style={{ color: V.green }}>
								Become the&nbsp;hero.
							</span>
						</motion.h2>

						<motion.p variants={reveal} className="mt-6 max-w-xl text-lg leading-relaxed text-pretty" style={{ color: V.muted }}>
							Virtus is a habit tracker that plays like an RPG: every habit earns XP, levels up a character, and
							grows one of six attributes. I designed, built, and shipped it solo, from architecture and
							subscription billing to App Store release and every update since.
						</motion.p>

						<motion.div variants={reveal} className="mt-10 flex flex-wrap items-center gap-3">
							<a
								href={VIRTUS_APP_STORE_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[transform,background-color] duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
								style={{ background: V.green, color: "#03150c", outlineColor: V.green }}
							>
								<svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
									<path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.38-3.65zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.75-.96 2.79 1.02.08 2.05-.52 2.68-1.27z" />
								</svg>
								Download on the App Store
							</a>
							<a
								href={VIRTUS_SITE_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
								style={{ boxShadow: `inset 0 0 0 1px ${V.line}`, outlineColor: V.green }}
							>
								Visit the site
								<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
							</a>
						</motion.div>

						<motion.ul variants={reveal} className="mt-10 flex flex-wrap gap-2" aria-label="Tech stack">
							{["React Native", "Expo", "TypeScript", "RevenueCat", "Sentry", "PostHog"].map((t) => (
								<li
									key={t}
									className="rounded-full px-3 py-1 font-mono text-xs"
									style={{ background: V.card, boxShadow: `inset 0 0 0 1px ${V.line}`, color: V.muted }}
								>
									{t}
								</li>
							))}
						</motion.ul>
					</div>

					{/* Hero device with floating chips */}
					<motion.div variants={reveal} className="relative mx-auto w-full max-w-[300px]">
						<Phone src="/images/virtus/home-heatmap.jpg" alt={features[0].alt} priority />
						<div
							className="absolute -left-10 top-[18%] hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 text-sm backdrop-blur-md sm:flex"
							style={{ background: `${V.cardHi}e6`, boxShadow: `inset 0 0 0 1px ${V.line}` }}
						>
							<Flame className="h-4 w-4" style={{ color: V.strength }} aria-hidden="true" />
							<span>
								<span className="font-semibold tabular-nums">72</span>
								<span style={{ color: V.muted }}> day streak</span>
							</span>
						</div>
						<div
							className="absolute -right-8 top-[48%] hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 text-sm backdrop-blur-md sm:flex"
							style={{ background: `${V.cardHi}e6`, boxShadow: `inset 0 0 0 1px ${V.line}` }}
						>
							<Sparkles className="h-4 w-4" style={{ color: V.green }} aria-hidden="true" />
							<span>
								<span style={{ color: V.muted }}>Quest complete </span>
								<span className="font-semibold tabular-nums" style={{ color: V.green }}>+50 XP</span>
							</span>
						</div>
						<div
							className="absolute -left-6 bottom-[12%] hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 text-sm backdrop-blur-md sm:flex"
							style={{ background: `${V.cardHi}e6`, boxShadow: `inset 0 0 0 1px ${V.line}` }}
						>
							<Trophy className="h-4 w-4" style={{ color: V.gold }} aria-hidden="true" />
							<span>
								<span style={{ color: V.muted }}>Rank up · </span>
								<span className="font-semibold">Apprentice</span>
							</span>
						</div>
					</motion.div>
				</motion.div>

				{/* ── Stat strip ──────────────────────────────────── */}
				<dl
					className="mt-24 grid grid-cols-2 overflow-hidden rounded-3xl md:grid-cols-4"
					style={{ boxShadow: `inset 0 0 0 1px ${V.line}`, background: V.line, gap: 1 }}
				>
					{stats.map((s) => (
						<div key={s.label} className="flex flex-col gap-1 px-6 py-7" style={{ background: V.bg }}>
							<dt className="order-2 text-sm" style={{ color: V.muted }}>
								{s.label}
							</dt>
							<dd className="order-1 text-3xl font-semibold tabular-nums tracking-tight md:text-4xl">{s.value}</dd>
						</div>
					))}
				</dl>

				{/* ── Feature explorer ───────────────────────────── */}
				<div className="mt-28">
					<Eyebrow>The system</Eyebrow>
					<h3 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
						A game you win by living well.
					</h3>

					<div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,320px)] lg:gap-20">
						<div role="tablist" aria-orientation="vertical" aria-label="Virtus features" onKeyDown={onTabKey} className="flex w-full max-w-xl flex-col gap-2">
							{features.map((f, i) => {
								const selected = i === active;
								return (
									<button
										key={f.id}
										id={`virtus-tab-${f.id}`}
										role="tab"
										type="button"
										aria-selected={selected}
										aria-controls="virtus-feature-panel"
										tabIndex={selected ? 0 : -1}
										onClick={() => setActive(i)}
										className="group relative w-full rounded-2xl px-5 py-4 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
										style={{
											background: selected ? V.card : "transparent",
											boxShadow: selected ? `inset 0 0 0 1px ${V.line}` : "none",
											outlineColor: V.green,
										}}
									>
										<span className="flex items-center gap-3">
											<span
												aria-hidden="true"
												className="h-2 w-2 shrink-0 rounded-full transition-transform duration-300"
												style={{ background: f.accent, transform: selected ? "scale(1.5)" : "scale(1)", boxShadow: selected ? `0 0 12px ${f.accent}` : "none" }}
											/>
											<span className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: selected ? f.accent : V.muted }}>
												{f.label}
											</span>
										</span>
										<span className={`mt-2 block text-xl font-semibold tracking-tight ${selected ? "" : "opacity-70 group-hover:opacity-100"}`}>
											{f.title}
										</span>
										<span
											className={`grid transition-[grid-template-rows,opacity] duration-300 ${selected ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
										>
											<span className="overflow-hidden">
												<span className="block pt-2 leading-relaxed" style={{ color: V.muted }}>
													{f.body}
												</span>
											</span>
										</span>
									</button>
								);
							})}
						</div>

						<div
							id="virtus-feature-panel"
							role="tabpanel"
							aria-labelledby={`virtus-tab-${feature.id}`}
							className="relative mx-auto w-full max-w-[300px]"
						>
							<div
								aria-hidden="true"
								className="absolute inset-x-6 top-1/4 -z-10 h-1/2 rounded-full blur-3xl transition-colors duration-500"
								style={{ background: `${feature.accent}40` }}
							/>
							<AnimatePresence mode="wait" initial={false}>
								<motion.div
									key={feature.id}
									initial={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.98 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: reduceMotion ? 0 : -16, scale: reduceMotion ? 1 : 0.98 }}
									transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
								>
									<Phone src={feature.image} alt={feature.alt} />
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>

				{/* ── Engineering ────────────────────────────────── */}
				<div className="mt-28">
					<Eyebrow>Under the hood</Eyebrow>
					<h3 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
						Built and shipped end to end, by one developer.
					</h3>
					<ol className="mt-12 grid gap-4 sm:grid-cols-2">
						{engineering.map((e, i) => (
							<li
								key={e.tag}
								className="rounded-3xl p-7 transition-colors duration-300 hover:bg-white/[0.02]"
								style={{ background: V.card, boxShadow: `inset 0 0 0 1px ${V.line}` }}
							>
								<div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em]">
									<span style={{ color: V.green }}>{e.tag}</span>
									<span className="tabular-nums" style={{ color: V.muted }} aria-hidden="true">
										0{i + 1}
									</span>
								</div>
								<p className="mt-5 text-xl font-semibold tracking-tight">{e.title}</p>
								<p className="mt-2 leading-relaxed" style={{ color: V.muted }}>
									{e.body}
								</p>
							</li>
						))}
					</ol>
				</div>

				{/* ── Gallery ─────────────────────────────────────── */}
				<div className="mt-28">
					<div className="flex flex-wrap items-end justify-between gap-4">
						<div>
							<Eyebrow>Inside the app</Eyebrow>
							<h3 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">Dark, fast, built to keep you playing.</h3>
						</div>
						<a
							href={VIRTUS_APP_STORE_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full text-sm font-medium underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
							style={{ color: V.green, outlineColor: V.green }}
						>
							See it on the App Store
							<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>

			<ul
				className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>li:first-child]:ml-auto [&>li:last-child]:mr-auto"
				aria-label="Virtus screenshots"
				tabIndex={0}
			>
				{gallery.map((g) => (
					<li key={g.src} className="w-[210px] shrink-0 snap-center sm:w-[230px]">
						<Phone src={g.src} alt={g.alt} />
					</li>
				))}
			</ul>
		</section>
	);
}
