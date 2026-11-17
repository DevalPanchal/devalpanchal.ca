export const skills = {
    languages: ["Python", "TypeScript", "JavaScript", "C#", "SQL"],
    backend: [
        "FastAPI",
        ".NET / ASP.NET Core",
        "Node.js",
        "Express",
        "REST APIs",
        "Azure AD",
    ],
    frontend: ["React", "Next.js", "Angular", "React Native"],
    data: ["PostgreSQL", "SQL Server", "MongoDB", "Apache Spark"],
    infra: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "Azure DevOps",
        "CI/CD",
        "Git/GitHub",
    ],
};

export const skillCategories: { key: keyof typeof skills; label: string }[] = [
    { key: "languages", label: "Languages" },
    { key: "backend", label: "Backend" },
    { key: "frontend", label: "Frontend" },
    { key: "data", label: "Databases & Data" },
    { key: "infra", label: "Infrastructure & DevOps" },
];

export const education = [
    {
        degree: "Bachelor of Science (Honours), Computer Science",
        school: "Ontario Tech University",
        period: "Apr 2024",
        description: "Graduated with Distinction · President's List (2021–2024)",
    },
];

export const awards = [
    {
        title: "Chief Nuclear Officer (CNO) Recognition Award",
        issuer: "Ontario Power Generation",
    },
    {
        title: "NSERC Research Award",
        issuer: "Natural Sciences and Engineering Research Council of Canada",
    },
];
