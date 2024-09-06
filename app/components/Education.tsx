import React from "react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

const education: Education = {
  degree: "Bachelor's Degree in Computer Science",
  institution: "University of Washington",
  period: "2014 - 2018",
  location: "Seattle, USA",
};

const EducationSection: React.FC = () => {
  return (
    <div className="max-w-4xl w-full mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 flex justify-between items-center">
        Education
        <span className="text-blue-500 cursor-pointer">^</span>
      </h1>
      <div className="mb-8">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-semibold text-gray-800">
            {education.degree}
          </h2>
          <span className="text-gray-600">{education.period}</span>
        </div>
        <p className="text-lg text-gray-700">
          {education.institution} - {education.location}
        </p>
      </div>
    </div>
  );
};

export default EducationSection;
