import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
import { EmailUrl, GithubUrl, LinkedInUrl } from "@/app/constants/links";

export default function ResumeInfo() {
    const titleRef = React.useRef(null);
    const subTitleRef = React.useRef(null);
    const linksRef = React.useRef(null);
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
    const isSubTitleInView = useInView(subTitleRef, { once: true, amount: 0.5 });
    const isLinksInView = useInView(linksRef, { once: true, amount: 0.5 });

	return (
		<div className="text-center mb-12 mt-12">
			<motion.h1
                ref={titleRef} 
                className="text-4xl font-bold mb-4"
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden" }
                variants={FramerAnimations.fadeIn}
            >
                Deval Panchal
            </motion.h1>
			<motion.p 
                ref={subTitleRef}
                className="text-xl text-muted-foreground mb-6"
                initial="hidden"
                animate={isSubTitleInView ? "visible" : "hidden" }
                variants={FramerAnimations.cardVariant}
            >Mobile &amp; Full-Stack Software Engineer
            </motion.p>
			<motion.div
                ref={linksRef}
                className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground"
                initial="hidden"
                animate={isLinksInView ? "visible" : "hidden" }
                variants={FramerAnimations.cardVariant}
            >
				<a href={`mailto:${EmailUrl}`} className="hover:text-primary transition-colors">
					{EmailUrl}
				</a>
				<span aria-hidden="true">|</span>
				<a href={LinkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
					linkedin.com/in/deval-panchal
				</a>
				<span aria-hidden="true">|</span>
				<a href={GithubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
					github.com/DevalPanchal
				</a>
				<span aria-hidden="true">|</span>
				<a href="https://devalpanchal.ca" className="hover:text-primary transition-colors">
					devalpanchal.ca
				</a>
			</motion.div>
		</div>
	);
}
