import { skills } from "@/app/data/resume";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";

export default function Skills() {
    const titleRef = React.useRef(null);
    const skillRef = React.useRef(null);
    const techSkillHeaderRef = React.useRef(null);
    const softSkillHeaderRef = React.useRef(null);

    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
    const isSkillInView = useInView(skillRef, { once: true, amount: 0.5 });
    const istechSkillHeaderInView = useInView(techSkillHeaderRef, { once: true, amount: 0.5 });
    const issoftSkillHeaderInView = useInView(softSkillHeaderRef, { once: true, amount: 0.5 });

	return (
		<section>
			<motion.h2 
                ref={titleRef}
                className="text-2xl font-semibold mb-4 pb-2 border-b"
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden" }
                variants={FramerAnimations.fadeIn}
            >
                Skills
            </motion.h2>
			<div className="grid md:grid-cols-2 gap-8">
				<div>
					<motion.h3 
                        ref={techSkillHeaderRef}
                        className="text-lg font-medium mb-3"
                        initial="hidden"
                        animate={istechSkillHeaderInView ? "visible" : "hidden" }
                        variants={FramerAnimations.slideInFromLeft}
                    >
                        Technical Skills
                    </motion.h3>
					<div className="flex flex-wrap gap-2">
						{skills.technical.map((skill) => (
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
				</div>
				<div>
					<motion.h3 
                        ref={softSkillHeaderRef}
                        className="text-lg font-medium mb-3"
                        initial="hidden"
                        animate={istechSkillHeaderInView ? "visible" : "hidden" }
                        variants={FramerAnimations.slideInFromRight}
                    >
                        Soft Skills
                    </motion.h3>
					<div className="flex flex-wrap gap-2">
						{skills.soft.map((skill) => (
							<motion.span
                                ref={skillRef}
								key={skill}
								className="bg-secondary px-3 py-1 rounded-full text-sm"
                                initial="hidden"
                                animate={isSkillInView ? "visible": "hidden"}
                                variants={FramerAnimations.slideInFromRight}
							>
								{skill}
							</motion.span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
