import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";

export default function Summary() {
    const titleRef = React.useRef(null);
    const textRef = React.useRef(null);
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
    const isTextInView = useInView(textRef, { once: true, amount: 0.5 });

	return (
		<section>
			<motion.h2 
                ref={titleRef}
                className="text-2xl font-semibold mb-4 pb-2 border-b"
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden" }
                variants={FramerAnimations.fadeIn}
            >
				Professional Summary
			</motion.h2>
			<motion.p 
                ref={textRef}
                className="text-muted-foreground leading-relaxed"
                initial="hidden"
                animate={isTextInView ? "visible" : "hidden" }
                variants={FramerAnimations.cardVariant}
            >
				Senior Full Stack Developer with 5+ years of experience in building
				scalable web applications. Specialized in React, Node.js, and cloud
				technologies. Proven track record of leading teams and delivering
				complex projects on time and within budget.
			</motion.p>
		</section>
	);
}
