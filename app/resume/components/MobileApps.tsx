import React from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
import { mobileApps } from "@/app/data/mobileApps";

export default function MobileApps() {
	const titleRef = React.useRef(null);
	const appRef = React.useRef(null);

	const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
	const isAppInView = useInView(appRef, { once: true, amount: 0.2 });

	return (
		<section>
			<motion.h2
				ref={titleRef}
				className="text-2xl font-semibold mb-4 pb-2 border-b"
				initial="hidden"
				animate={isTitleInView ? "visible" : "hidden"}
				variants={FramerAnimations.fadeIn}
			>
				Mobile Applications
			</motion.h2>
			<div ref={appRef} className="space-y-8">
				{mobileApps.map((app, index) => (
					<motion.div
						key={index}
						className="space-y-2"
						initial="hidden"
						animate={isAppInView ? "visible" : "hidden"}
						variants={FramerAnimations.slideInFromLeft}
					>
						<div>
							<h3 className="text-lg font-medium">{app.title}</h3>
							<p className="text-primary">{app.role}</p>
						</div>
						<p className="text-sm text-muted-foreground">{app.status}</p>
						<div className="flex flex-wrap gap-2 py-1">
							{app.technologies.map((tech) => (
								<span
									key={tech}
									className="bg-secondary px-3 py-1 rounded-full text-sm"
								>
									{tech}
								</span>
							))}
						</div>
						<ul className="list-disc list-outside pl-5 text-muted-foreground space-y-2">
							{app.descriptionBullets.map((bullet, i) => (
								<li key={i}>{bullet}</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</section>
	);
}
