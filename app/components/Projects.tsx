import { ArrowDown, ExternalLink, Github } from "lucide-react";
import React from "react";
import { projects } from "../data/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
import Link from "next/link";
import { Colors } from "../constants/colors";

export default function Projects() {
	return (
		<section id="projects" className="py-20 bg-secondary">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<h2 className="text-4xl font-medium text-center mb-16">
					Featured Projects
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
					{projects.map((project, index) => {
						// eslint-disable-next-line react-hooks/rules-of-hooks
						const cardRef = React.useRef(null);
								
						// eslint-disable-next-line react-hooks/rules-of-hooks
						const isCardInView = useInView(cardRef, { 
							once: false, 
							amount: 0.2, // Lower amount means it triggers earlier
							margin: "0px 0px -100px 0px" // Negative bottom margin makes it trigger before fully in view
						});

						return (
							<motion.div
								key={index}
								className="group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
								ref={cardRef}
								initial="hidden"
								animate={isCardInView ? "visible": "hidden"}
								variants={FramerAnimations.cardVariant}
							>
								{project.screens ? (
									<div
										className="relative aspect-video overflow-hidden"
										style={{ background: "radial-gradient(ellipse at 50% 110%, #2dd17a55 0%, #050706 65%)" }}
									>
										<div className="absolute inset-x-0 top-[14%] flex justify-center gap-3 sm:gap-4 transition-transform duration-500 group-hover:-translate-y-3">
											{project.screens.map((screen, i) => (
												<div
													key={screen.src}
													className={`w-[26%] shrink-0 rounded-[1.4rem] p-[4px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9)] ${i === 1 ? "-mt-[6%]" : ""}`}
													style={{ background: "linear-gradient(160deg, #2a302d 0%, #0d100e 45%, #1c2320 100%)" }}
												>
													<Image
														width={555}
														height={1200}
														src={screen.src}
														alt={screen.alt}
														className="block h-auto w-full rounded-[1.2rem]"
													/>
												</div>
											))}
										</div>
									</div>
								) : (
									<div className="aspect-video overflow-hidden">
										<Image
											width={1280}
											height={720}
											src={project.image}
											alt={project.title}
											className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
										/>
									</div>
								)}
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
									<p className="text-muted-foreground mb-4">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.map((tech, i) => (
											<span
												key={i}
												className="px-3 py-1 bg-secondary rounded-full text-sm"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex gap-4">
										{project.github && (
											<Link
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												style={{ "--hover-color": Colors.GitHubColorHex } as React.CSSProperties}
												className="flex items-center gap-2 text-[var(--hover-color)] hover:bg-[var(--hover-color)] hover:text-white rounded-lg px-2 py-2 transition-colors"
											>
												<Github className="w-4 h-4" />
												<span>Code</span>
											</Link>
										)}
										{project.caseStudy && (
											<a
												href={project.caseStudy}
												className="flex items-center gap-2 text-foreground hover:bg-foreground hover:text-background rounded-lg px-2 py-2 transition-colors"
											>
												<ArrowDown className="w-4 h-4" aria-hidden="true" />
												<span>Case study</span>
											</a>
										)}
										<Link 
											href={project.demo} 
											target="_blank" 
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-primary hover:bg-primary hover:text-white rounded-lg px-2 py-2 transition-colors"
										>
											<ExternalLink  className="w-4 h-4" />
											<span>{project.demoLabel ?? "Demo"}</span>
										</Link>
									</div>
								</div>
							</motion.div>
						)
					}
					)}
				</div>
			</div>
		</section>
	);
}
