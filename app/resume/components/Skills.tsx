import { skillCategories, skills } from "@/app/data/resume";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";

export default function Skills() {
    const titleRef = React.useRef(null);
    const gridRef = React.useRef(null);

    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
    const isGridInView = useInView(gridRef, { once: true, amount: 0.2 });

	return (
		<section>
			<motion.h2 
                ref={titleRef}
                className="text-2xl font-semibold mb-4 pb-2 border-b"
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden" }
                variants={FramerAnimations.fadeIn}
            >
                Technical Skills
            </motion.h2>
			<div ref={gridRef} className="grid md:grid-cols-2 gap-8">
				{skillCategories.map((category, index) => {
					const isEven = index % 2 === 0;
					const variant = isEven
						? FramerAnimations.slideInFromLeft
						: FramerAnimations.slideInFromRight;

					return (
						<motion.div
							key={category.key}
							initial="hidden"
							animate={isGridInView ? "visible" : "hidden"}
							variants={variant}
						>
							<h3 className="text-lg font-medium mb-3">{category.label}</h3>
							<div className="flex flex-wrap gap-2">
								{skills[category.key].map((skill) => (
									<span
										key={skill}
										className="bg-secondary px-3 py-1 rounded-full text-sm"
									>
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
