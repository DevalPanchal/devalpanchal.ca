import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
import { Colors } from "../constants/colors";
import { EmailUrl, GithubUrl, LinkedInUrl } from "../constants/links";
import ExperienceCounter from "./ExperienceCounter";

export default function About() {
	// element refs
	const titleRef = React.useRef(null);
	const bioRef = React.useRef(null);
	const cardsRef = React.useRef(null);
	const socialRef = React.useRef(null);

	// Check if elements are in view
	const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
	const isBioInView = useInView(bioRef, { once: false, amount: 0.5 });
	const isCardsInView = useInView(cardsRef, { once: false, amount: 0.5 });
	const isSocialInView = useInView(socialRef, { once: false, amount: 0.5 });


	return (
		<section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
			<motion.h2
				ref={titleRef}
				className="text-4xl font-medium text-center mb-16"
				initial="hidden"
				animate={isTitleInView ? "visible" : "hidden"}
				variants={FramerAnimations.fadeIn}
			>
				About Me
			</motion.h2>

			<div className="gap-12">
				<div className="space-y-12">
					<motion.div
						ref={bioRef}
						className="max-w-3xl mx-auto text-center space-y-8"
						initial="hidden"
						animate={isBioInView ? "visible" : "hidden"}
						variants={FramerAnimations.fadeIn}
					>
						<div className="inline-flex flex-col items-center gap-2 rounded-2xl border bg-secondary/60 px-6 sm:px-10 py-6">
							<span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
								Years shipping software · since May 2021
							</span>
							<ExperienceCounter className="font-mono text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground" />
						</div>

						<p className="text-lg leading-relaxed text-pretty">
							I&apos;m a software developer at Ontario Power Generation, where I build FastAPI and .NET platforms
							that have saved the business over $1M a year in overtime and licensing. Before that I was a data engineer
							tuning SQL Server pipelines, and a research developer turning AI prototypes into tools published at
							ACM UIST and ACL BEA. On the side, I designed, built, and shipped{" "}
							<a href="#virtus" className="font-medium text-primary underline-offset-4 hover:underline focus-visible:underline">
								Virtus
							</a>
							, a habit-tracking iOS app with a 5-star App Store rating.
						</p>
					</motion.div>

					<motion.div
						ref={cardsRef}
						className="grid grid-cols-1 md:grid-cols-3 gap-10"
						initial="hidden"
						animate={isCardsInView ? "visible" : "hidden"}
						variants={FramerAnimations.staggerCards}
					>
						<motion.div variants={FramerAnimations.cardVariant}>
							<h3 className="text-xl font-semibold">Backend platforms</h3>
							<p className="text-md leading-relaxed text-gray-600 mt-4">
								FastAPI and .NET services that replace manual work. Project Management Application cut 3,000 overtime hours a year, and Project Workbench retired $500K in legacy licensing.
							</p>
						</motion.div>

						<motion.div variants={FramerAnimations.cardVariant}>
							<h3 className="text-xl font-semibold">Data at scale</h3>
							<p className="text-md leading-relaxed text-gray-600 mt-4">
								SQL Server tuning that took a report query from 2 hr 57 min to 2.5 min, Python ETL that removed 35 hours of weekly spreadsheet work, and Spark jobs over 15M records.
							</p>
						</motion.div>

						<motion.div variants={FramerAnimations.cardVariant}>
							<h3 className="text-xl font-semibold">Shipping end to end</h3>
							<p className="text-md leading-relaxed text-gray-600 mt-4">
								Azure DevOps pipelines that cut release time from 3 hours to 10 minutes, and a solo iOS app taken from first commit through App Store review and every update since.
							</p>
						</motion.div>
					</motion.div>

					<motion.div
						ref={socialRef}
						className="flex gap-4 pt-4 justify-center"
						initial="hidden"
						animate={isSocialInView ? "visible" : "hidden"}
						variants={FramerAnimations.socialVariant}
					>
						<motion.a
							href={LinkedInUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							style={{ "--hover-color": Colors.LinkedInColorHex } as React.CSSProperties}
							className="text-[var(--hover-color)] hover:bg-[var(--hover-color)] hover:text-white transition-colors px-2 py-2 rounded-lg"
							variants={FramerAnimations.iconVariant}
						>
							<Linkedin className="w-6 h-6" />
						</motion.a>
						<motion.a
							href={GithubUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							style={{ "--hover-color": Colors.GitHubColorHex } as React.CSSProperties}
							className="text-[var(--hover-color)] hover:bg-[var(--hover-color)] hover:text-white transition-colors px-2 py-2 rounded-lg"
							variants={FramerAnimations.iconVariant}
						>
							<Github className="w-6 h-6" />
						</motion.a>
						<motion.a
							href={`mailto:${EmailUrl}`}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Email"
							style={{ "--hover-color": Colors.EmailColorHex } as React.CSSProperties}
							className="text-[var(--hover-color)] hover:bg-[var(--hover-color)] hover:text-white transition-colors px-2 py-2 rounded-lg"
							variants={FramerAnimations.iconVariant}
						>
							<Mail className="w-6 h-6" />
						</motion.a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
