// Fetches the public GitHub contribution calendar at build time and writes it to
// app/data/github-contributions.json, which the hero bakes into the page.
// Runs automatically before `npm run build` (the "prebuild" script).
// If the fetch fails, the existing JSON is kept so the build never breaks.

import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const USER = "DevalPanchal";
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "app", "data", "github-contributions.json");

async function main() {
	const res = await fetch(`https://github.com/users/${USER}/contributions`, {
		headers: { "User-Agent": "portfolio-build" },
		signal: AbortSignal.timeout(15000),
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	const html = await res.text();

	// Each day cell carries data-date and data-level (0-4); attribute order varies.
	const days = new Map();
	for (const cell of html.match(/<td[^>]*ContributionCalendar-day[^>]*>/g) ?? []) {
		const date = cell.match(/data-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
		const level = cell.match(/data-level="(\d)"/)?.[1];
		if (date && level !== undefined) days.set(date, Number(level));
	}
	if (days.size < 300) throw new Error(`only parsed ${days.size} days`);

	const sorted = [...days.entries()].sort(([a], [b]) => a.localeCompare(b));
	const data = {
		user: USER,
		fetchedAt: new Date().toISOString(),
		// First date is a Sunday (GitHub's calendar starts weeks on Sunday).
		start: sorted[0][0],
		levels: sorted.map(([, l]) => l).join(""),
	};
	await writeFile(OUT, JSON.stringify(data, null, "\t") + "\n");
	const active = sorted.filter(([, l]) => l > 0).length;
	console.log(`[github-contributions] ${sorted.length} days (${active} active) → ${path.relative(process.cwd(), OUT)}`);
}

main().catch(async (err) => {
	try {
		await readFile(OUT);
		console.warn(`[github-contributions] fetch failed (${err.message}); keeping existing data.`);
	} catch {
		await writeFile(OUT, JSON.stringify({ user: USER, fetchedAt: null, start: null, levels: "" }, null, "\t") + "\n");
		console.warn(`[github-contributions] fetch failed (${err.message}); wrote empty data (palette fallback).`);
	}
});
