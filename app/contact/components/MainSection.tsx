"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
// Import as many icons as you need from Lucide
import {
	Briefcase,
	Calendar,
	User,
	MapPin,
	Globe,
	Languages,
	Code,
	Clock,
} from "lucide-react";

export default function MainSection() {
	// Title animation
	const titleRef = React.useRef(null);
	const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
    const cardRef = React.useRef(null);

	// Grid animation
	const gridRef = React.useRef(null);
	const isGridInView = useInView(gridRef, { once: true, amount: 0.5 });
    const isCardInView = useInView(cardRef, { once: true, amount: 0.5 });

	return (
		<section className="text-center mb-12 mt-12 text-white">
			{/* Title */}
			<motion.h1
				ref={titleRef}
				className="text-4xl font-bold mb-4"
				initial="hidden"
				animate={isTitleInView ? "visible" : "hidden"}
				variants={FramerAnimations.fadeIn}
			>
				Get in Touch
			</motion.h1>

			{/* Responsive Grid Container */}
			<motion.div
				ref={gridRef}
				className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-6 max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
				initial="hidden"
				animate={isGridInView ? "visible" : "hidden"}
				variants={FramerAnimations.fadeIn}
			>
				{/* Current Position - wider on larger screens, creates the "off-pattern" */}
				<motion.div 
                    className="col-span-1 sm:col-span-4 lg:col-span-7 flex flex-col items-start bg-[#1d1d1f] px-6 py-4 gap-2 rounded-md"
                    ref={cardRef}
                    initial="hidden"
                    animate={isCardInView ? "visible": "hidden"}
                    variants={FramerAnimations.slideInFromTop}
                >
					<Briefcase className="w-6 h-6" />
					<h2 className="text-4xl pt-5 font-medium">Current Position</h2>
					<p className="text-muted-foreground">Ontario Power Generation</p>
				</motion.div>

				{/* Experience - smaller width to contrast with Current Position */}
				<motion.div 
                    className="col-span-1 sm:col-span-2 lg:col-span-5 flex flex-col items-start bg-[#1d1d1f] px-6 py-4 gap-2 rounded-md"
                    ref={cardRef}
                    initial="hidden"
                    animate={isCardInView ? "visible": "hidden"}
                    variants={FramerAnimations.slideInFromRight}
                >
					<Calendar className="w-6 h-6" />
					<h2 className="text-4xl pt-5 font-medium">Experience</h2>
					<p className="text-muted-foreground">5+ years in development</p>
				</motion.div>

				{/* Freelance */}
				<motion.div 
                    className="col-span-1 sm:col-span-3 lg:col-span-4 flex flex-col items-start bg-[#1d1d1f] px-6 py-4 gap-2 rounded-md"
                    ref={cardRef}
                    initial="hidden"
                    animate={isCardInView ? "visible": "hidden"}
                    variants={FramerAnimations.slideInFromLeft}
                >
					<User className="w-6 h-6" />
					<h2 className="text-4xl pt-5 font-medium">Freelance</h2>
					<p className="text-muted-foreground">Available for hire</p>
				</motion.div>

				{/* From */}
				<motion.div 
                    className="col-span-1 sm:col-span-3 lg:col-span-4 flex flex-col items-start bg-[#1d1d1f] px-6 py-4 gap-2 rounded-md"
                    ref={cardRef}
                    initial="hidden"
                    animate={isCardInView ? "visible": "hidden"}
                    variants={FramerAnimations.fadeIn}
                >
					<MapPin className="w-6 h-6" />
					<h2 className="text-4xl pt-5 font-medium">From</h2>
					<p className="text-muted-foreground">Ontario, Canada</p>
				</motion.div>

				{/* Language */}
				<motion.div 
                    className="col-span-1 sm:col-span-3 lg:col-span-4 flex flex-col items-start bg-[#1d1d1f] px-6 py-4 gap-2 rounded-md"
                    ref={cardRef}
                    initial="hidden"
                    animate={isCardInView ? "visible": "hidden"}
                    variants={FramerAnimations.slideInFromRight}
                >
					<Languages className="w-6 h-6" />
					<h2 className="text-4xl pt-5 font-medium">Language</h2>
					<p className="text-muted-foreground">English</p>
				</motion.div>

				{/* Born */}
				<motion.div 
                    className="col-span-1 sm:col-span-3 lg:col-span-3 flex flex-col items-start bg-[#1d1d1f] px-6 py-4 gap-2 rounded-md"
                    ref={cardRef}
                    initial="hidden"
                    animate={isCardInView ? "visible": "hidden"}
                    variants={FramerAnimations.slideInFromBottom}
                >
					<Globe className="w-6 h-6" />
					<h2 className="text-4xl pt-5 font-medium">Born</h2>
					<p className="text-muted-foreground">2001</p>
				</motion.div>

				{/* Specialization */}
				<motion.div 
                    className="col-span-1 sm:col-span-3 lg:col-span-5 flex flex-col items-start bg-[#1d1d1f] px-6 py-4 gap-2 rounded-md"
                    ref={cardRef}
                    initial="hidden"
                    animate={isCardInView ? "visible": "hidden"}
                    variants={FramerAnimations.slideInFromBottom}
                >
					<Code className="w-6 h-6" />
					<h2 className="text-4xl pt-5 font-medium">Specialization</h2>
					<p className="text-muted-foreground">React, NextJS, Tailwind CSS</p>
				</motion.div>

				{/* Availability */}
				<motion.div 
                    className="col-span-1 sm:col-span-3 lg:col-span-4 flex flex-col items-start bg-[#1d1d1f] px-6 py-4 gap-2 rounded-md"
                    ref={cardRef}
                    initial="hidden"
                    animate={isCardInView ? "visible": "hidden"}
                    variants={FramerAnimations.slideInFromRight}
                >
					<Clock className="w-6 h-6" />
					<h2 className="text-4xl pt-5 font-medium">Availability</h2>
					<p className="text-muted-foreground">Evenings & Weekends (EST)</p>
				</motion.div>
			</motion.div>
		</section>
	);
}