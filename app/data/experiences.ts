import { BrainCircuit, Atom, Lightbulb, CloudLightning } from "lucide-react";

export const experiences = [
	{
		company: "Ontario Power Generation",
		position: "Software Developer",
		period: "Aug 2024 - Present",
		descriptionBullets: [
			"Develop and maintain Angular, C#, and SQL Server applications for both station-level and enterprise-wide use",
			"Implement CI/CD pipelines using Azure DevOps to streamline deployment processes",
			"Collaborate with cross-functional teams to design scalable front-end components and optimize back-end systems",
			"Mentor junior developers and promote best coding practices across the organization",
		],
		skills: [
			{ title: "Angular", color: "#c3002f" },
			{ title: "C#", color: "#9b4993" },
			{ title: "SQL Server", color: "#CC2927" },
			{ title: "Azure DevOps", color: "#0078D7" },
		],
        centerIcon: Atom,
        centerIconColor: '#66CC00'
	},
	{
		company: "Ontario Tech University",
		position: "Research Assistant",
		period: "May 2023 - October 2024",
		descriptionBullets: [
			"Collaborate with a Ph.D. candidate to explore AI-driven language learning methodologies",
			"Conduct data collection and user studies to assess the effectiveness of new language-learning tools",
			"Contribute to published research that advances the field of educational technology",
		],
		skills: [
			{ title: "React", color: "#61DAFB" },
			{ title: "Node.js", color: "#339933" },
			{ title: "AI Research", color: "#663399" }, // Custom color
			{ title: "Data Analysis", color: "#FF9800" },
		],
        centerIcon: BrainCircuit,
        centerIconColor: '#E75D2A'
	},
	{
		company: "Ontario Power Generation",
		position: "Data Analyst",
		period: "May 2022 - Sep 2023",
		descriptionBullets: [
			"Utilize Python, SQL Server, and Power BI to develop analytics solutions for nuclear personnel",
			"Design and automate ETL processes to streamline data workflows and reporting",
			"Create interactive dashboards that drive real-time, data-informed decisions for safety and efficiency",
		],
		skills: [
			{ title: "Python", color: "#3776AB" },
			{ title: "SQL Server", color: "#CC2927" },
			{ title: "Power BI", color: "#F2C811" },
			{ title: "ETL", color: "#666666" },
		],
        centerIcon: CloudLightning,
        centerIconColor: '#66CC00'
	},
	{
		company: "Vialab",
		position: "Full Stack Developer",
		period: "May 2021 - May 2022",
		descriptionBullets: [
			"Led the end-to-end development of a mobile application for AR-based language learning",
			"Integrated real-time back-end services to enhance user engagement and interactivity",
			"Collaborated with UI/UX teams to create seamless, visually appealing interfaces",
		],
		skills: [
			{ title: "React", color: "#61DAFB" },
            { title: "Node.js", color: "#339933" },
			{ title: "Augmented Reality", color: "#b070d9" },
			{ title: "UI/UX", color: "#FF0099" },
			{ title: "Full Stack", color: "#0891b2" },
		],
        centerIcon: Lightbulb,
        centerIconColor: '#F2C811'
	},
];
