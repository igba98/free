
import React from "react";

interface Project {
  name: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    name: "Atlassian",
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
    name: "Refer Me",
    technologies: [
      "Amazon S3 (AWS S3)",
      "SQL",
      "PostgreSQL",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Vercel",
    ],
  },
  {
    name: "Pidwin",
    technologies: [
      "Web3",
      "Web3.js",
      "Blockchain",
      "React",
      "Next.js",
      "Server-side Rendering (SSR)",
      "MongoDB",
    ],
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto ">
      <h1 className="text-2xl font-bold mb-6">Portfolio</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-medium text-blue-600 mb-2">
            {project.name}
          </h2>
          <p className="text-gray-700">{project.technologies.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
