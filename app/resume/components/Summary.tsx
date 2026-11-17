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
				Software developer with experience across backend platforms, data
				engineering, and mobile. At Ontario Power Generation I build FastAPI and
				.NET applications that have cut thousands of overtime hours and over $1M a
				year in cost, and run the Azure DevOps pipelines that took releases from 3
				hours to 10 minutes. Previously a data engineer and a research developer
				with work published at ACM UIST and ACL BEA, and the solo developer of
				Virtus, a 5-star habit-tracking app on the App Store.
			</motion.p>
		</section>
	);
}
