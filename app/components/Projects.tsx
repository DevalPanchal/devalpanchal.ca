import { ExternalLink, Github } from "lucide-react";
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
								<div className="aspect-video overflow-hidden">
									<Image 
										width={10}
										height={10}
										src={project.image}
										alt={project.title}
										className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
									/>
								</div>
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
										<Link 
											href={project.github} 
											target="_blank" 
											style={{ "--hover-color": Colors.GitHubColorHex } as React.CSSProperties}
											className="flex items-center gap-2 text-[var(--hover-color)] hover:bg-[var(--hover-color)] hover:text-white rounded-lg px-2 py-2 transition-colors"
										>
											<Github className="w-4 h-4" />
											<span>Code</span>
										</Link>
										<Link 
											href={project.demo} 
											target="_blank" 
											className="flex items-center gap-2 text-primary hover:bg-primary hover:text-white rounded-lg px-2 py-2 transition-colors"
										>
											<ExternalLink  className="w-4 h-4" />
											<span>Demo</span>
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
