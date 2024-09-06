import React from 'react'
import Holder from './holder';

export default function Expertise() {
     const skills: string[] = [
       "User Interface (UI)",
       "Front-end",
       "Full-stack",
       "Back-end Development",
       "UI Components",
       "Data Visualization",
       "User Experience (UX)",
       "ESLint",
       "OpenAI",
       "OpenAI GPT-4 API",
       "GitHub",
       "Git",
       "JSON",
       "Unit Testing",
       "Vanilla JS",
       "Web3",
     ];
  return (
    <main>
      <h1>EXPERTISE</h1>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Holder key={index} borderColor="#00CC83">
            {skill}
          </Holder>
        ))}
      </div>
    </main>
  );
}
