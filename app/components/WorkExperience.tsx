// components/WorkExperience.tsx

import React from "react";

interface Job {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

const WorkExperience: React.FC = () => {
  const jobs: Job[] = [
    {
      title: "Senior Software Engineer",
      company: "Atlassian",
      period: "2024 - PRESENT",
      responsibilities: [
        "Implemented several features across Atlassian core products.",
        "Led and oversaw the high-level architecture of multiple initiatives.",
        "Implemented various performance-related initiatives to improve customer experience.",
      ],
      technologies: [
        "React",
        "GraphQL",
        "TypeScript",
        "Figma",
        "Python 3",
        "SQL",
        "JSON",
        "JSON API",
      ],
    },
    {
      title: "CTO | Co-Founder",
      company: "Refer Me",
      period: "2022 - PRESENT",
      responsibilities: [
        "Designed and built the entire UI/UX for Refer Me, which has served over 100,000 registered users and over 1m experiences.",
        "Built several AI tools from scratch, such as an AI resume reviewer, an AI resume builder, AI mock interviews, AI matching and ranking, etc.",
        "Implemented SSR and SEO to rank us in the top 100 websites related to jobs in the USA. Optimized FCP, LCP, and all SEO metrics to rank us in the top rankings across several long-tail and short-tail keywords in Google.",
        "Implemented authentication, file upload to S3, profile state management, analytics, data pipelines, and complex user flows to create a seamless experience for our users.",
      ],
      technologies: [
        "Amazon S3 (AWS S3)",
        "SQL",
        "PostgreSQL",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "Vercel",
        "OpenAI",
        "OpenAI GPT-3 API",
        "OpenAI GPT-4 API",
        "Search Engine Optimization (SEO)",
        "Klaviyo",
        "JSON",
        "JSON API",
        "Amazon Web Services (AWS)",
        "Contentful",
        "Headless CMS",
        "Chakra UI",
      ],
    },
    {
      title: "Principle Software Engineer",
      company: "Pidwin",
      period: "2022 - 2023",
      responsibilities: [
        "Built, managed, owned, and scaled a blockchain-based payment system processing millions of dollars in deposits and withdrawals with 99.98% uptime accuracy across ETH, BTC, and LTC.",
        "Led the re-architecture from a static large bundle react application, SCSS, and providers to a scalable code split sever side rendered application in Next.JS, Zustand, and Chakra UI.",
        "Created the test suite infrastructure and automation to ensure code quality for our repositories to go from 0% code coverage to nearly 100% code coverage.",
        "Implemented data pipelines to properly surface data in Mixpanel to nontechnical team members to refine and improve our services and applications.",
      ],
      technologies: [
        "Web3",
        "Web3.js",
        "Blockchain",
        "React",
        "Next.js",
        "Server-side Rendering (SSR)",
        "MongoDB",
        "Amazon S3 (AWS S3)",
        "ECS",
        "Amazon EC2",
        "Node.js",
        "REST",
        "Docker",
        "SCSS",
        "CSS",
        "Search Engine Optimization (SEO)",
        "JSON",
        "JSON API",
        "Amazon Web Services (AWS)",
        "Headless CMS",
      ],
    },
    {
      title: "Senior Full-stack Developer",
      company: "Snapchat",
      period: "2021 - 2022",
      responsibilities: [
        "Led the architecture and design for Snapchat's Audience Insights tool that allows businesses to better target different audiences for their ads.",
        "Led design meetings, sprint planning, the general project timeline, and development steps to bring apps used by thousands of high-spending clients from idea to production.",
        "Adjusted pixel mapping in the Shopify ecosystem to allow stores to track user interaction from the Snapchat app better.",
        "Created a proper component design and versioning system that is leveraged by many teams throughout the company.",
      ],
      technologies: [
        "JavaScript",
        "Redux",
        "React",
        "GraphQL",
        "Google Cloud Platform (GCP)",
        "Full-stack",
        "Back-end Development",
        "Databases",
        "Algorithms",
        "Data Structures",
        "Data Visualization",
        "Front-end Development",
        "Java",
        "Node.js",
        "Next.js",
        "Cypress",
        "TypeScript",
        "Jira",
        "REST",
        "Figma",
        "Server-side Rendering (SSR)",
        "Jest",
        "Testing",
        "ESLint",
        "UI Design",
        "CI/CD Pipelines",
        "HTML",
        "CSS",
        "Python",
        "Test-driven Development (TDD)",
        "Redux-Saga",
        "Redux Thunk",
        "REST APIs",
        "Git",
        "APIs",
        "Material UI",
        "UI Components",
        "Storybook",
        "React Redux",
        "Amazon S3 (AWS S3)",
        "Search Engine Optimization (SEO)",
        "JSON",
        "JSON API",
        "Headless CMS",
        "React Router",
      ],
    },
    {
      title: "Senior Full-stack Developer",
      company: "Adobe",
      period: "2019 - 2021",
      responsibilities: [
        "Migrated old ES5 PHP stacks used by Adobe to a more modern framework such as Node.js, React, Redux, and GraphQL.",
        "Integrated API reporting and health monitoring for new services in Adobe to allow us to better track success metrics and uptime and downtime reports.",
      ],
      technologies: [
        "PHP",
        "Node.js",
        "JavaScript",
        "React",
        "Redux",
        "GraphQL",
        "Figma",
        "Jira",
        "REST",
        "Full-stack",
        "Back-end Development",
        "Databases",
        "Algorithms",
        "Data Structures",
        "Data Visualization",
        "Front-end Development",
        "Cypress",
        "TypeScript",
        "Server-side Rendering (SSR)",
        "Jest",
        "Testing",
        "Docker",
        "ESLint",
        "UI Design",
        "CI/CD Pipelines",
        "HTML",
        "CSS",
        "Python",
        "Test-driven Development (TDD)",
        "Redux-Saga",
        "Redux Thunk",
        "REST APIs",
        "Git",
        "APIs",
        "UI Components",
        "Storybook",
        "React Redux",
        "Redux Toolkit",
        "Amazon S3 (AWS S3)",
        "Search Engine Optimization (SEO)",
        "JSON",
        "JSON API",
        "Amazon Web Services (AWS)",
        "Contentful",
        "React Router",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Work Experience</h1>
      {jobs.map((job, index) => (
        <div key={index} className="mb-8 border-l-[1.5px] border-blue-500 border-dotted pl-4">
          <div className="flex justify-between items-baseline">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <span className="text-gray-600">{job.period}</span>
          </div>
          <h3 className="text-lg text-blue-600 mb-2">{job.company}</h3>
          <ul className="list-disc list-inside mb-4">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-gray-700 mb-1">
                {resp}
              </li>
            ))}
          </ul>
          <div className="text-sm text-gray-600">
            <strong>Technologies:</strong> {job.technologies.join(", ")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
