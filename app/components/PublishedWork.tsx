import React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FramerAnimations } from "@/lib/FramerMotion";
import { publications } from "../data/publications";

export default function PublishedWork() {
	const titleRef = React.useRef(null);
	const listRef = React.useRef(null);

	const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
	const isListInView = useInView(listRef, { once: true, amount: 0.2 });

	return (
		<section id="published-work" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
			<motion.h2
				ref={titleRef}
				className="text-4xl font-medium text-center mb-16"
				initial="hidden"
				animate={isTitleInView ? "visible" : "hidden"}
				variants={FramerAnimations.fadeIn}
			>
				Published Work
			</motion.h2>

			<motion.ol
				ref={listRef}
				className="grid gap-6 md:grid-cols-2"
				initial="hidden"
				animate={isListInView ? "visible" : "hidden"}
				variants={FramerAnimations.staggerCards}
			>
				{publications.map((pub) => (
					<motion.li key={pub.url} variants={FramerAnimations.cardVariant}>
						<a
							href={pub.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex h-full flex-col rounded-2xl border bg-background p-8 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-primary/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
						>
							<div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
								<span className="text-primary">{pub.venue}</span>
								<span aria-hidden="true">·</span>
								<span>{pub.role}</span>
							</div>
							<h3 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-balance">{pub.title}</h3>
							<p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{pub.summary}</p>
							<span className="mt-6 inline-flex items-center gap-1.5 font-medium text-primary">
								Read the paper
								<ArrowUpRight
									className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
									aria-hidden="true"
								/>
							</span>
						</a>
					</motion.li>
				))}
			</motion.ol>
		</section>
	);
}
