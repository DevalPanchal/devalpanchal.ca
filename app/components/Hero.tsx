import { ArrowDown } from "lucide-react";
import React from "react";
import StarryBackground from "./StarryBackground";
import { motion, useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";

export default function Hero() {
	const titleRef = React.useRef(null);
	const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 w-full h-full">
				<StarryBackground />
			</div>

			<div className="relative z-20 text-center text-white px-4">
				<h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
					Hi, I&apos;m <span className="text-primary">Deval Panchal</span>
				</h1>
				<p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
					Software Developer · Backend, Data &amp; Mobile
				</p>
				<a
					href="#about"
					className="border-2 hover:border-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-[115%] inline-block"
				>
					View My Work
				</a>

				<motion.p 
					ref={titleRef} 
					className="mx-auto w-1/2 py-8"
					initial="hidden"
					animate={isTitleInView ? "visible" : "hidden"}
					variants={FramerAnimations.slideInFromBottom}
				>
					I build FastAPI and .NET platforms at Ontario Power Generation, and I shipped Virtus, a habit-tracking app on the App Store.
				</motion.p>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
				<a href="#about">
					<ArrowDown className="text-white w-6 h-6 hover:scale-[150%] transition-all hover:cursor-pointer" />
				</a>
			</div>
		</section>
	);
}
