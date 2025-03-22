import { Briefcase, Calendar } from "lucide-react";
import React from "react";
import { experiences } from "../data/experiences";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FramerAnimations } from "@/lib/FramerMotion";

export default function Experience() {
	// element refs
	const titleRef = React.useRef(null);

	// check if elements are in view
	const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
	

	return (
		<section id="experience" className="py-20 bg-secondary">
			<div className="max-w-7xl mx-auto px-4 md:px-8">
				<motion.h2 
					ref={titleRef}
					className="text-4xl font-medium text-center mb-16"
					initial="hidden"
					animate={isTitleInView ? "visible": "hidden"}
					variants={FramerAnimations.slideInFromBottom}
				>Experience</motion.h2>
				<div className="relative">
					{/* Vertical line in the center (visible on md and up) */}
					<div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-black/10 transform -translate-x-1/2" />

					<div className="flex flex-col space-y-12">
						{experiences.map((exp, index) => {
							// eslint-disable-next-line react-hooks/rules-of-hooks
							const cardRef = React.useRef(null);

							// eslint-disable-next-line react-hooks/rules-of-hooks
							const isCardInView = useInView(cardRef, { 
								once: false, 
								amount: 0.2, // Lower amount means it triggers earlier
								margin: "0px 0px -100px 0px" // Negative bottom margin makes it trigger before fully in view
							});

							// If the index is even, item goes to the left; if odd, to the right
							const isEven = index % 2 === 0;
							const CenterIcon = exp.centerIcon; // Retrieve the icon component

							return (
								<motion.div 
									key={index} 
									className="relative flex flex-col items-center md:flex-row"
									ref={cardRef}
									initial="hidden"
									animate={isCardInView ? "visible": "hidden"}
									variants={FramerAnimations.cardVariant}
								>
									<div
										className={`
                    						  md:w-1/2
                    						  ${isEven
												? // Even index: align item to the left
												  "mr-auto md:pr-8"
												: // Odd index: align item to the right
												  "ml-auto md:pl-8"
												}
                    						  flex flex-col items-center md:items-start
                    						`}
									>
										{/* Card container */}
										<div 
											className="bg-background p-6 rounded-md shadow-md w-full md:max-w-lg"

										>
											<div className="flex items-center justify-between mb-2">
												<h3 className="text-xl font-semibold text-primary">
													{exp.company}
												</h3>
												<div className="flex items-center gap-2 text-sm text-muted-foreground">
													<Calendar className="w-4 h-4" />
													<span>{exp.period}</span>
												</div>
											</div>

											{/* Position */}
											<div className="flex items-center gap-2 mb-2">
												<Briefcase className="w-4 h-4 text-primary" />
												<h4 className="font-medium">{exp.position}</h4>
											</div>

											{/* Tech Stack */}
											<div className="flex flex-wrap gap-2 mt-4">
                    						   	{exp.skills.map((skill, i) => (
                    						   	  	<span key={i} style={{ backgroundColor: skill.color }} className="px-3 py-1 rounded-full text-background text-sm">
                    						   			{skill.title}
                    						   	  	</span>
                    						   	))}
                    						 </div>

											{/* Render bullet points */}
											<ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                      						  	{exp.descriptionBullets.map((bullet, i) => (
                      						  	  	<li key={i}>{bullet}</li>
                      						  	))}
                      						</ul>
										</div>
									</div>

									{/* Dot on the center line (only show on md and above) */}
									<div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
									  	{CenterIcon && (
											<div className="relative">
												<div style={{ backgroundColor: exp.centerIconColor }} className="p-2 rounded-full hover:opacity-80 transition-opacity">
													<CenterIcon className="w-6 h-6 text-background animate-pulse" />
												</div>
											</div>
									  	)}
									</div>
								</motion.div >
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
