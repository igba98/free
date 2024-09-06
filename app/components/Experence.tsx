import React from "react";
import Holder from "./holder"; // Assuming you have a Holder component

interface ExperienceItem {
  skill: string;
  years: number;
}

const ExperienceDisplay: React.FC = () => {
  const experiences: ExperienceItem[] = [
    { skill: "Front-end Development", years: 6 },
    { skill: "React", years: 6 },
    { skill: "Redux", years: 6 },
    { skill: "Node.js", years: 6 },
    { skill: "Full-stack", years: 6 },
    { skill: "TypeScript", years: 5 },
    { skill: "Server-side Rendering (SSR)", years: 4 },
    { skill: "GraphQL", years: 3 },
  ];

  return (
    <div className="space-y-4 w-[500px]">
      <h2 className="text-2xl font-bold">Experience</h2>
      <div className="flex flex-wrap gap-2">
        {experiences.map((exp, index) => (
          <Holder key={index} borderColor="#007bff">
            {`${exp.skill} - ${exp.years} years`}
          </Holder>
        ))}
      </div>
    </div>
  );
};

export default ExperienceDisplay;
