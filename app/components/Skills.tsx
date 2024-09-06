import React from "react";

interface Experience {
  title: string;
  url: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Full-Stack Developer",
    url: "https://www.example.com",
    description:
      "Developed and maintained complex web applications using modern technologies and best practices.",
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "MongoDB",
      "GraphQL",
      "Redux",
      "Jest",
      "Cypress",
    ],
  },
  {
    title: "Front-End Architect",
    url: "https://www.example.com",
    description:
      "Led the design and implementation of scalable front-end architectures for enterprise-level applications.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Webpack",
      "Storybook",
      "Performance Optimization",
    ],
  },
  {
    title: "Full-Stack Engineer",
    url: "https://www.example.com",
    description:
      "Built and deployed serverless applications with a focus on scalability and performance.",
    skills: [
      "JavaScript",
      "AWS Lambda",
      "DynamoDB",
      "Serverless Framework",
      "React",
      "Node.js",
      "CI/CD",
      "Docker",
    ],
  },
];

const ExperienceSkills: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8 border-b pb-6">
          <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
          <a href={exp.url} className="text-blue-600 hover:underline">
            {exp.url}
          </a>
          <p className="mt-2 text-gray-700">{exp.description}</p>
          <div className="mt-4">
            <strong>Skills:</strong>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSkills;
