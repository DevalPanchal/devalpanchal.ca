import { Calendar } from "lucide-react";
import React from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
import { experiences } from "@/app/data/experiences";
import { projects } from "@/app/data/projects";

export default function Experience() {
    const titleRef = React.useRef(null);
	const projectRef = React.useRef(null);
    const skillRef = React.useRef(null);
    
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
	const isProjectInView = useInView(projectRef, { once: true, amount: 0.5 });
    const isSkillInView = useInView(skillRef, { once: true, amount: 0.5 });
    

	return (
		<section>
			<motion.h2 
                ref={titleRef}
                className="text-2xl font-semibold mb-4 pb-2 border-b"
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden" }
                variants={FramerAnimations.fadeIn}
            >
                Experience
            </motion.h2>
			<div className="space-y-8">
				{projects.map((proj, index) => {
					const isEven = index % 2 === 0;

					return (
						<motion.div 
							key={index}
							ref={projectRef}
							initial="hidden"
							animate={isProjectInView ? "visible" : "hidden"}
							variants={ isEven ? FramerAnimations.slideInFromLeft : FramerAnimations.slideInFromRight}
						>
							<div>
								<h3 className="text-lg font-medium">{proj.title}</h3>
							</div>

                            <div className="flex gap-2 py-2">
                                {proj.technologies.map((skill) => (
                                    <motion.span
                                        ref={skillRef}
                                        key={skill}
                                        className="bg-secondary px-3 py-1 rounded-full text-sm"
                                        initial="hidden"
                                        animate={isSkillInView ? "visible": "hidden"}
                                        variants={FramerAnimations.slideInFromLeft}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>

							<ul className="list-disc list-inside text-muted-foreground space-y-2">
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
