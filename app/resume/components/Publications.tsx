import React from "react";
import { motion, useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
import { publications } from "@/app/data/publications";

export default function Publications() {
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
				Publications
			</motion.h2>
			<motion.ul
				ref={listRef}
				className="space-y-4"
				initial="hidden"
				animate={isListInView ? "visible" : "hidden"}
				variants={FramerAnimations.slideInFromLeft}
			>
				{publications.map((pub) => (
					<li key={pub.url} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
						<div>
							<h3 className="text-lg font-medium">{pub.title}</h3>
							<p className="text-muted-foreground italic">
								{pub.venue} · {pub.role}
							</p>
						</div>
						<a
							href={pub.url}
							target="_blank"
							rel="noopener noreferrer"
							className="shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline"
						>
							Read paper ↗
						</a>
					</li>
				))}
			</motion.ul>
		</section>
	);
}
