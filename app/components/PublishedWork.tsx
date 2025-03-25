import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";

export default function PublishedWork() {
    const titleRef = React.useRef(null);
    const cardRef = React.useRef(null);

    const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
    const isCardInView = useInView(cardRef, { once: false, amount: 0.5 });

	return (
		<section
			id="published-work"
			className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
		>
			<motion.h2 
                ref={titleRef}
                className="text-4xl font-medium text-center mb-16"
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden"}
                variants={FramerAnimations.fadeIn}
            >
                Published Work
            </motion.h2>
			<motion.div 
                ref={cardRef}
                className="bg-background rounded-lg p-8 shadow-md"
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden"}
                variants={FramerAnimations.slideInFromBottom}
            >
				<h3 className="text-2xl font-semibold mb-4">
					Enhancing Language Learning with Augmented Reality and AI
				</h3>
				<p className="mb-4">
					In this paper, we explore a novel approach that integrates augmented
					reality with AI-driven techniques to create interactive and contextual
					language learning experiences. The study demonstrates improved
					engagement and learning outcomes through real-world object recognition
					and dynamic content delivery.
				</p>
				<a
					href="https://dl.acm.org/doi/10.1145/3672539.3686352"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 inline-block"
				>
					Read the Paper
				</a>
			</motion.div>
		</section>
	);
}
