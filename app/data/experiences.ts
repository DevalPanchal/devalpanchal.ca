import { BrainCircuit, Atom, Lightbulb, CloudLightning } from "lucide-react";

export const experiences = [
	{
		company: "Ontario Power Generation",
		position: "Software Developer",
		period: "Aug 2024 - Present",
		location: "Oshawa, ON",
		descriptionBullets: [
			"Lead a development team owning enterprise platforms within a ~$600K application portfolio in the enterprise project applications group, serving both station and corporate users",
			"Designed and delivered an automated workflow in the project management platform that eliminated manual overtime processing, enabling approximately $300K in annual savings",
			"Architect and develop Angular 18 and .NET 10 applications following Clean Architecture and CQRS patterns, integrating RESTful APIs and Azure AD authentication, with CI/CD pipelines in Azure DevOps automating build, test, and deployment",
			"Develop reporting tools in SQL Server and Power BI used at the corporate level for performance monitoring, regulatory compliance reporting, and executive decision-making across the project portfolio",
			"Serve as production database owner — accountable for data integrity, query performance tuning, backup and recovery strategy, and role-based access control across all enterprise project applications",
			"Partner directly with business stakeholders to scope requirements and translate them into delivered features, running the work from intake through release without a dedicated product or QA layer",
		],
		skills: [
			{ title: "Angular", color: "#c3002f" },
			{ title: ".NET", color: "#512BD4" },
			{ title: "C#", color: "#9b4993" },
			{ title: "SQL Server", color: "#CC2927" },
			{ title: "Azure DevOps", color: "#0078D7" },
		],
        centerIcon: Atom,
        centerIconColor: '#66CC00'
	},
	{
		company: "Ontario Tech University",
		position: "Software Developer, Research Fellowship",
		period: "May 2023 - Oct 2024",
		location: "Oshawa, ON",
		descriptionBullets: [
			"Collaborated with a Ph.D. candidate on AI-driven language-learning methodologies, designing and building 2 experimental models evaluated by 30+ participants",
			"Led data collection and user studies with 120+ participants across 3 demographics, measuring a 25% improvement in vocabulary retention",
		],
		skills: [
			{ title: "React", color: "#61DAFB" },
			{ title: "Node.js", color: "#339933" },
			{ title: "Express", color: "#000000" },
			{ title: "PostgreSQL", color: "#336791" },
			{ title: "Docker", color: "#2496ED" },
		],
        centerIcon: BrainCircuit,
        centerIconColor: '#E75D2A'
	},
	{
		company: "Ontario Power Generation",
		position: "Data Analyst",
		period: "May 2022 - Sep 2023",
		location: "Oshawa, ON",
		descriptionBullets: [
			"Optimized SQL queries and managed ETL processes, achieving up to 98% runtime improvement on data retrieval",
			"Built and scheduled stored procedures syncing 5+ dashboards processing 50,000+ data points, and led data modelling and architecture design for scalable reporting projects",
		],
		skills: [
			{ title: "Python", color: "#3776AB" },
			{ title: "SQL Server", color: "#CC2927" },
			{ title: "Power BI", color: "#F2C811" },
			{ title: "Power Apps", color: "#742774" },
		],
        centerIcon: CloudLightning,
        centerIconColor: '#66CC00'
	},
	{
		company: "Ontario Tech University",
		position: "Full-Stack Developer",
		period: "May 2021 - Apr 2022",
		location: "Oshawa, ON",
		descriptionBullets: [
			"Built an augmented reality mobile application for language learning in collaboration with a research professor and graduate student, taking it from concept through a working build used in study sessions",
			"Ran A/B testing sessions comparing AR-based language learning against a control method, administering the sessions and collecting the effectiveness data the research was based on",
		],
		skills: [
			{ title: "React Native", color: "#61DAFB" },
			{ title: "Expo", color: "#000020" },
			{ title: "Augmented Reality", color: "#b070d9" },
			{ title: "A/B Testing", color: "#0891b2" },
		],
        centerIcon: Lightbulb,
        centerIconColor: '#F2C811'
	},
];
