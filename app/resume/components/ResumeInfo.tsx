import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";

export default function ResumeInfo() {
    const titleRef = React.useRef(null);
    const subTitleRef = React.useRef(null);
    const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
    const isSubTitleInView = useInView(subTitleRef, { once: true, amount: 0.5 });

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
            >Software Developer
            </motion.p>
		</div>
	);
}
