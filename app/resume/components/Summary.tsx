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
				Software engineer with 5 years of full-stack development experience,
				currently leading a two-person team building enterprise applications at a
				regulated energy utility, and the solo developer of a live iOS app on the
				App Store. Builds cross-platform mobile in React Native and TypeScript and
				owns features end-to-end — architecture, implementation, CI/CD, store
				release, and post-launch iteration. Equally comfortable on the backend,
				from RESTful API and real-time data integration through production
				database ownership.
			</motion.p>
		</section>
	);
}
