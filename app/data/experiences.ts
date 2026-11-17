import { BrainCircuit, Atom, Lightbulb, CloudLightning } from "lucide-react";

// Start of professional experience — used by the live experience counter.
export const CAREER_START = new Date("2021-05-01T00:00:00-04:00");

export const experiences = [
	{
		company: "Ontario Power Generation",
		position: "Software Developer",
		period: "Aug 2024 - Present",
		location: "Oshawa, ON",
		descriptionBullets: [
			"Decreased 3,000 overtime hours (~$300K/yr) enterprise-wide by engineering Project Management Application, a FastAPI platform that auto-generates 20+ senior-manager and 4+ VP-level reports across 3 organizations from JSON documents in NoSQL blob storage",
			"Eliminated $500K in legacy licensing and saved ~$700K/yr in overtime by engineering Project Workbench, a project-portfolio tool delivered end to end from stakeholder requirements to production release",
			"Optimized release time from 3 hours to 10 minutes by designing Azure DevOps CI/CD pipelines that automate testing, PR guarding, and deployment, running on a Docker/Kubernetes platform",
			"Orchestrated 1,000+ hours of backlog work to completion, earning the Chief Nuclear Officer (CNO) Recognition Award, by identifying and defining key work items for teammates to pick up, while owning production SQL Server databases and .NET services",
		],
		skills: [
			{ title: "FastAPI", color: "#009688" },
			{ title: ".NET", color: "#512BD4" },
			{ title: "SQL Server", color: "#CC2927" },
			{ title: "Azure DevOps", color: "#0078D7" },
			{ title: "Kubernetes", color: "#326CE5" },
		],
		centerIcon: Atom,
		centerIconColor: "#66CC00",
	},
	{
		company: "Ontario Tech University",
		position: "Software Developer, Research Fellowship",
		period: "May 2023 - Oct 2024",
		location: "Toronto, ON",
		descriptionBullets: [
			"Delivered LingoComics and LangEye, 2 AI-driven learning tools evaluated by 30+ study participants, by hardening experimental AI prototypes into production-style, containerized Node.js/Express REST APIs",
			"Enabled a 120+ participant study showing a 25% improvement in vocabulary retention by engineering the PostgreSQL schemas, migrations, and MongoDB storage that powered the study data",
			"Engineered LingoComics, a full-stack TypeScript app where learners co-author stories, turning structured inputs into text and comic-style illustrations through a multi-stage GPT-4-turbo and DALL-E 3 pipeline",
		],
		skills: [
			{ title: "TypeScript", color: "#3178C6" },
			{ title: "Node.js", color: "#339933" },
			{ title: "PostgreSQL", color: "#336791" },
			{ title: "MongoDB", color: "#47A248" },
			{ title: "Docker", color: "#2496ED" },
		],
		centerIcon: BrainCircuit,
		centerIconColor: "#E75D2A",
	},
	{
		company: "Ontario Power Generation",
		position: "Data Engineer",
		period: "May 2022 - Sep 2023",
		location: "Toronto, ON",
		descriptionBullets: [
			"Reduced data retrieval runtime from 2 hr 57 min to ~2.5 min (98%) by re-engineering SQL Server queries and ETL pipelines, making the reports and dashboards built on top of them dramatically faster",
			"Eliminated 35 hours of weekly manual spreadsheet work behind 5+ production dashboards by building Python ETL scripts and scheduled stored procedures that aggregate millions of records automatically",
			"Powered senior-leadership reporting by designing the SQL Server data models behind it and partitioning 10 GB (~15M records) of asset-management data with Apache Spark for processing at scale",
		],
		skills: [
			{ title: "Python", color: "#3776AB" },
			{ title: "SQL Server", color: "#CC2927" },
			{ title: "Apache Spark", color: "#E25A1C" },
			{ title: "ETL", color: "#0891b2" },
		],
		centerIcon: CloudLightning,
		centerIconColor: "#66CC00",
	},
	{
		company: "Vialab",
		position: "Full-Stack Developer",
		period: "May 2021 - Apr 2022",
		location: "Toronto, ON",
		descriptionBullets: [
			"Earned a ~8.7/10 usability rating from 20 learners by engineering LangEye, a 4-language mobile app that turns photos of real-world objects into vocabulary lessons via Google Cloud Vision, an LLM, translation, and text-to-speech",
			"Protected study sessions from backend failures by monitoring services and usage in Grafana, catching issues before they ever reached participants",
		],
		skills: [
			{ title: "React Native", color: "#61DAFB" },
			{ title: "Google Cloud Vision", color: "#4285F4" },
			{ title: "LLMs", color: "#b070d9" },
			{ title: "Grafana", color: "#F46800" },
		],
		centerIcon: Lightbulb,
		centerIconColor: "#F2C811",
	},
];
