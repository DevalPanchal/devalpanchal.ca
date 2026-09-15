import React from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
import { projects } from "@/app/data/projects";

export default function Projects() {
    const titleRef = React.useRef(null);
	const projectsRef = React.useRef(null);

    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
	const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.2 });

	return (
		<section>
			<motion.h2 
                ref={titleRef}
                className="text-2xl font-semibold mb-4 pb-2 border-b"
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden" }
                variants={FramerAnimations.fadeIn}
            >
                Projects
            </motion.h2>
			<div ref={projectsRef} className="space-y-8">
				{projects.map((proj, index) => {
					const isEven = index % 2 === 0;

					return (
						<motion.div 
							key={index}
							className="space-y-2"
							initial="hidden"
							animate={isProjectsInView ? "visible" : "hidden"}
							variants={ isEven ? FramerAnimations.slideInFromLeft : FramerAnimations.slideInFromRight}
						>
							<h3 className="text-lg font-medium">{proj.title}</h3>

                            <div className="flex flex-wrap gap-2 py-1">
                                {proj.technologies.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-secondary px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

							<ul className="list-disc list-outside pl-5 text-muted-foreground space-y-2">
								{proj.descriptionBullets.map((bullet, i) => (
									<li key={i}>{ bullet }</li>
								))}
							</ul>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
