import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";
import { Colors } from "../constants/colors";
import { EmailUrl, GithubUrl, LinkedInUrl } from "../constants/links";

export default function About() {
	// element refs
	const titleRef = React.useRef(null);
	const bioRef = React.useRef(null);
	const cardsRef = React.useRef(null);
	const socialRef = React.useRef(null);

	// Check if elements are in view
	const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
	const isBioInView = useInView(bioRef, { once: false, amount: 0.5 });
	const isCardsInView = useInView(cardsRef, { once: false, amount: 0.5 });
	const isSocialInView = useInView(socialRef, { once: false, amount: 0.5 });


	return (
		<section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
			<motion.h2
				ref={titleRef}
				className="text-4xl font-medium text-center mb-16"
				initial="hidden"
				animate={isTitleInView ? "visible" : "hidden"}
				variants={FramerAnimations.fadeIn}
			>
				About Me
			</motion.h2>

			<div className="gap-12">
				<div className="space-y-12">
					<motion.p
						ref={bioRef}
						className="text-lg leading-relaxed w-2/3 mx-auto text-center"
						initial="hidden"
						animate={isBioInView ? "visible" : "hidden"}
						variants={FramerAnimations.fadeIn}
					>
						I&apos;m a full-stack developer with over 5 years of experience building web applications that are not just functional, but genuinely enjoyable to use.
						I enjoy working with Next.js, Node.js, Angular, SQL, and data-driven solutions, and I&apos;m always exploring new technologies to keep things modern and efficient.
						Whether it’s boosting performance, scaling an app, or solving tough problems, I focus on building clean, reliable solutions that make a real difference for users.
					</motion.p>

					<motion.div
						ref={cardsRef}
						className="grid grid-cols-1 md:grid-cols-3 gap-10"
						initial="hidden"
						animate={isCardsInView ? "visible" : "hidden"}
						variants={FramerAnimations.staggerCards}
					>
						<motion.div variants={FramerAnimations.cardVariant}>
							<h1 className="text-xl font-semibold">
								Innovation & Problem-Solving
							</h1>
							<p className="text-md leading-relaxed text-gray-600 mt-4">
								I thrive on tackling complex challenges with creative solutions.
								Whether it&apos;s optimizing a backend system or refining a UI for
								better accessibility, I believe in blending technical expertise
								with innovative thinking to create seamless digital experiences.
							</p>
						</motion.div>

						<motion.div variants={FramerAnimations.cardVariant}>
							<h1 className="text-xl font-semibold">Strategic Development</h1>
							<p className="text-md leading-relaxed text-gray-600 mt-4">
								Building applications isn&apos;t just about writing code—it&apos;s
								about understanding the users and ensuring that technology
								aligns with their needs. My experience across both frontend and
								backend development enables me to architect solutions that are
								not only functional but also scalable and maintainable.
							</p>
						</motion.div>

						<motion.div variants={FramerAnimations.cardVariant}>
							<h1 className="text-xl font-semibold">
								Continuous Learning & Leadership
							</h1>
							<p className="text-md leading-relaxed text-gray-600 mt-4">
								Technology is ever-evolving, and I stay at the forefront by
								constantly exploring new frameworks, best practices, and
								emerging trends. I also enjoy mentoring and collaborating with
								teams to create an environment where innovation thrives.
							</p>
						</motion.div>
					</motion.div>

					<motion.div
						ref={socialRef}
						className="flex gap-4 pt-4 justify-center"
						initial="hidden"
						animate={isSocialInView ? "visible" : "hidden"}
						variants={FramerAnimations.socialVariant}
					>
						<motion.a
							href={LinkedInUrl}
							target="_blank"
							style={{ "--hover-color": Colors.LinkedInColorHex } as React.CSSProperties}
							className="text-[var(--hover-color)] hover:bg-[var(--hover-color)] hover:text-white transition-colors px-2 py-2 rounded-lg"
							variants={FramerAnimations.iconVariant}
						>
							<Linkedin className="w-6 h-6" />
						</motion.a>
						<motion.a
							href={GithubUrl}
							target="_blank"
							style={{ "--hover-color": Colors.GitHubColorHex } as React.CSSProperties}
							className="text-[var(--hover-color)] hover:bg-[var(--hover-color)] hover:text-white transition-colors px-2 py-2 rounded-lg"
							variants={FramerAnimations.iconVariant}
						>
							<Github className="w-6 h-6" />
						</motion.a>
						<motion.a
							href={`mailto:${EmailUrl}`}
							target="_blank"
							style={{ "--hover-color": Colors.EmailColorHex } as React.CSSProperties}
							className="text-[var(--hover-color)] hover:bg-[var(--hover-color)] hover:text-white transition-colors px-2 py-2 rounded-lg"
							variants={FramerAnimations.iconVariant}
						>
							<Mail className="w-6 h-6" />
						</motion.a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
