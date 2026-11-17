import { VIRTUS_APP_STORE_URL } from "./mobileApps";

export const projects = [
	{
		title: "Virtus",
		description:
			"A gamified habit-tracking iOS app, built and shipped solo. Habits earn XP, level up a character, and grow six attributes. Rated 5 stars on the App Store.",
		image: "/images/virtus/home-heatmap.jpg",
		screens: [
			{ src: "/images/virtus/stats-radar.jpg", alt: "Virtus attribute radar chart" },
			{ src: "/images/virtus/home-heatmap.jpg", alt: "Virtus home screen with streak heatmaps" },
			{ src: "/images/virtus/achievements.jpg", alt: "Virtus achievements grid" },
		],
		technologies: ["React Native", "Expo", "TypeScript", "RevenueCat"],
		demo: VIRTUS_APP_STORE_URL,
		demoLabel: "App Store",
		caseStudy: "#virtus",
		descriptionBullets: [
			"Earned a 5-star App Store rating and 3,500+ impressions, with the architecture, RevenueCat subscription billing, and release pipeline engineered end to end",
			"Kept the app crash-free while shipping updates through EAS and App Store review, guided by Sentry error data, PostHog analytics, and user-reported issues",
		]
	},
	{
		title: "LingoComics",
		description:
			"A full-stack TypeScript app where language learners co-author stories that AI turns into text and comic-style illustrations. Published at ACM UIST 2024.",
		image:
			"images/lingocomics.jpg",
		technologies: ["TypeScript", "SvelteKit", "GPT-4-turbo", "DALL-E 3"],
		github: "https://github.com/DevalPanchal/LingoComics",
		demo: "https://dl.acm.org/doi/10.1145/3672539.3686352",
		demoLabel: "Paper",
		descriptionBullets: [
			"Turned structured learner inputs into stories and comic-style illustrations through a multi-stage GPT-4-turbo and DALL-E 3 pipeline",
			"Hardened the experimental AI prototype into a production-style, containerized REST API used in user studies",
			"Published as first author at ACM UIST 2024 Adjunct",
		]
	},
	{
		title: "LangEye",
		description: "A 4-language mobile app that turns photos of real-world objects into vocabulary lessons. Published at the ACL BEA 2025 Workshop.",
		image:
			"images/langeye.jpg",
		technologies: ["React Native", "Node.js", "Google Cloud Vision", "LLMs"],
		github: "https://github.com/DevalPanchal/language-learning-ar",
		demo: "https://aclanthology.org/2025.bea-1.33/",
		demoLabel: "Paper",
		descriptionBullets: [
			"Turned photos of everyday objects into vocabulary lessons via Google Cloud Vision, an LLM, translation, and text-to-speech",
			"Earned a ~8.7/10 usability rating from 20 learners in a one-week study",
			"Monitored services and usage in Grafana to catch backend issues before they reached study participants",
		]
	},
	{
		title: "First Portfolio Website",
		description: "My first portfolio website, developed using pure HTML, SCSS, and JavaScript, to demonstrate my proficiency in core web technologies.",
		image: "images/portfolio.jpg",
		technologies: ["HTML", "SCSS", "JavaScript"],
		github: "https://github.com/DevalPanchal/devalpanchal.github.io",
		demo: "https://devalpanchal.github.io/",
		descriptionBullets: [
			"Designed and coded a fully responsive portfolio layout using mobile-first principles",
  			"Implemented smooth scrolling navigation and interactive UI components with JavaScript",
  			"Used SCSS for modular and maintainable styling with variables and mixins",
  			"Showcased personal projects, skills, and contact information in a clean and minimal design"
		]
	}
];