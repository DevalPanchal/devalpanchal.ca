import React from "react";
import { motion, useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";

export default function ResumeFooter() {
    const cardRef = React.useRef(null);

    const isCardInView = useInView(cardRef, { once: true, amount: 0.5 });

	return (
		<motion.div 
            className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
            ref={cardRef}
            initial="hidden"
            animate={isCardInView ? "visible": "hidden"}
            variants={FramerAnimations.slideInFromBottom}
        >
			<header className="flex items-center justify-center max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-[#1d1d1f] rounded-lg">
				<h1 className="font-medium text-4xl w-2/3 text-white">View my Resume</h1>
				<a 
					href="/resume/Deval_Panchal_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="border-2 border-gray-400 font-bold hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:text-white text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto transition-colors"
				>
					Download Resume
				</a>
			</header>
		</motion.div>
	);
}
