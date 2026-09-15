export const skills = {
    mobile: [
        "React Native",
        "Expo",
        "Expo Router",
        "EAS Build & Submit",
        "App Store Connect",
        "TestFlight",
        "NativeWind",
        "RevenueCat",
        "In-App Subscriptions",
    ],
    languages: [
        "TypeScript",
        "JavaScript",
        "C#",
        "Python",
        "SQL",
        "HTML/CSS",
    ],
    frameworks: [
        "React",
        "React Native",
        "Next.js",
        "Angular",
        "SvelteKit",
        ".NET 8 / ASP.NET Core",
        "Node.js",
        "Express",
    ],
    data: [
        "Zustand",
        "RESTful APIs",
        "Supabase",
        "Firebase",
        "PostgreSQL",
        "SQL Server",
        "Power BI",
        "DAX",
        "ETL Pipelines",
        "OpenAI API",
    ],
    cloud: [
        "Azure DevOps (CI/CD)",
        "Google Cloud Platform",
        "Docker",
        "Git/GitHub",
        "Supabase Edge Functions",
    ],
    testing: [
        "Jest",
        "Sentry",
        "PostHog",
        "XUnit",
    ],
};

export const skillCategories: { key: keyof typeof skills; label: string }[] = [
    { key: "mobile", label: "Mobile" },
    { key: "languages", label: "Languages" },
    { key: "frameworks", label: "Frameworks & Libraries" },
    { key: "data", label: "State & Data" },
    { key: "cloud", label: "Cloud & DevOps" },
    { key: "testing", label: "Testing & Monitoring" },
];

export const education = [
    {
        degree: "Bachelor of Science (Honours), Computer Science",
        school: "Ontario Tech University",
        period: "Apr 2024",
        description: "Awards: President's List (2021–2024) · NSERC Research Award Recipient",
    },
];
