import { Calendar, MapPin } from "lucide-react";
import React from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
import { experiences } from "@/app/data/experiences";

export default function Experience() {
    const titleRef = React.useRef(null);
	const experienceRef = React.useRef(null);
    
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
	const isExperienceInView = useInView(experienceRef, { once: true, amount: 0.5 });

	return (
		<section>
			<motion.h2 
                ref={titleRef}
                className="text-2xl font-semibold mb-4 pb-2 border-b"
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden" }
                variants={FramerAnimations.fadeIn}
            >
                Professional Experience
            </motion.h2>
			<div className="space-y-8">
				{experiences.map((exp, index) => {
					const isEven = index % 2 === 0;

					return (
						<motion.div 
							key={index}
							ref={experienceRef}
							className="space-y-2"
							initial="hidden"
							animate={"visible"}
							variants={ isEven ? FramerAnimations.slideInFromLeft : FramerAnimations.slideInFromRight}
						>
							<div>
								<h3 className="text-lg font-medium">{exp.position}</h3>
								<p className="text-primary">{exp.company}</p>
							</div>
							<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
								<span className="flex items-center gap-2">
									<Calendar className="w-4 h-4" />
									{exp.period}
								</span>
								<span className="flex items-center gap-2">
									<MapPin className="w-4 h-4" />
									{exp.location}
								</span>
							</div>
							<div className="flex flex-wrap gap-2 py-1">
								{exp.skills.map((skill) => (
									<span
										key={skill.title}
										className="bg-secondary px-3 py-1 rounded-full text-sm"
									>
										{skill.title}
									</span>
								))}
							</div>
							<ul className="list-disc list-outside pl-5 text-muted-foreground space-y-2">
								{exp.descriptionBullets.map((bullet, i) => (
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
