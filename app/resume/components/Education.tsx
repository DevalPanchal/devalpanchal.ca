import { education } from "@/app/data/resume";
import React from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";


export default function Education() {
    const titleRef = React.useRef(null);
    const educationRef = React.useRef(null);

    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
    const isEducationInView = useInView(educationRef, { once: true, amount: 0.5 });

	return (
		<section>
			<motion.h2 
                ref={titleRef}
                className="text-2xl font-semibold mb-4 pb-2 border-b"
                initial="hidden"
                animate={isTitleInView ? "visible": "hidden"}
                variants={FramerAnimations.fadeIn}
            >
                Education
            </motion.h2>
			<motion.div 
                ref={educationRef}
                className="space-y-6"
                initial="hidden"
                animate={isEducationInView ? "visible": "hidden"}
                variants={FramerAnimations.slideInFromLeft}
            >
				{education.map((edu, index) => (
					<div key={index}>
						<div className="flex justify-between items-start mb-2">
							<div>
								<h3 className="text-lg font-medium">{edu.degree}</h3>
								<p className="text-primary">{edu.school}</p>
							</div>
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<span>{edu.period}</span>
							</div>
						</div>
						<p className="text-muted-foreground">{edu.description}</p>
					</div>
				))}
			</motion.div>
		</section>
	);
}
