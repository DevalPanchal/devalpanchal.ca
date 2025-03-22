"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {

	return (
		<main className="min-h-screen">
			{/* Hero Section */}
			<Hero />

			{/* About Section */}
			<About />

			{/* Experience Section */}
			<Experience />

			{/* Projects Section */}
			<Projects />
		</main>
	);
}
