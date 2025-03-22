"use client";

import ResumeHeader from "./components/Resume";
import ResumeInfo from "./components/ResumeInfo";
import Summary from "./components/Summary";
import { certifications, education, skills } from "../data/resume";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";


export default function Resume() {
	return (
		<main className="min-h-screen bg-background py-16 overflow-x-hidden">
			<ResumeHeader />

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<ResumeInfo />

				{/* Main Content */}
				<div className="space-y-12">
					{/* Professional Summary */}
					<Summary />

					{/* Skills */}
					<Skills />

					{/* Experience */}
					<Experience />

					{/* Education */}
					<Education />

					{/* Projects */}
					<Projects />
				</div>
			</div>
		</main>
	);
}
