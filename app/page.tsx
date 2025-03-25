"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import PublishedWork from "./components/PublishedWork";

export default function Home() {

	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<Hero />

			{/* About Section */}
			<About />

			{/* Experience Section */}
			<Experience />

			{/* Published Work */}
			<PublishedWork />

			{/* Projects Section */}
			<Projects />
		</main>
	);
}
