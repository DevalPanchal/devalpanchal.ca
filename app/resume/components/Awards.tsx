import React from "react";
import { motion, useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
import { awards } from "@/app/data/resume";

export default function Awards() {
	const titleRef = React.useRef(null);
	const listRef = React.useRef(null);

	const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
	const isListInView = useInView(listRef, { once: true, amount: 0.2 });

	return (
		<section>
			<motion.h2
				ref={titleRef}
				className="text-2xl font-semibold mb-4 pb-2 border-b"
				initial="hidden"
				animate={isTitleInView ? "visible" : "hidden"}
				variants={FramerAnimations.fadeIn}
			>
				Awards
			</motion.h2>
			<motion.ul
				ref={listRef}
				className="grid gap-4 sm:grid-cols-2"
				initial="hidden"
				animate={isListInView ? "visible" : "hidden"}
				variants={FramerAnimations.slideInFromRight}
			>
				{awards.map((award) => (
					<li key={award.title}>
						<h3 className="text-lg font-medium">{award.title}</h3>
						<p className="text-primary">{award.issuer}</p>
					</li>
				))}
			</motion.ul>
		</section>
	);
}
