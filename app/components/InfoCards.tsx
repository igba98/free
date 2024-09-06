// components/InfoCards.tsx
import React from "react";

const InfoCards: React.FC = () => {
  return (
    <div className="flex justify-center gap-4 ">
      <div className="bg-gray-300 p-6  flex-1">
        <div className="text-blue-600 text-2xl mr-2">🕒</div>
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-bold">Availability</h2>
        </div>
        <p className="text-gray-600">Part-time</p>
      </div>
      <div className="bg-gray-300 p-6   flex-1">
        <div className="text-blue-600 text-2xl mr-2">💻</div>
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-bold">Preferred Environment</h2>
        </div>
        <p className="text-gray-600">
          Node.js, React, Redux, GraphQL, Front-end Development, Full-stack,
          TypeScript, CI/CD Pipelines, Testing, NoSQL
        </p>
      </div>
      <div className="bg-gray-300 p-6   flex-1">
        <div className="text-blue-600 text-2xl mr-2">⭐</div>
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-bold">The most amazing...</h2>
        </div>
        <p className="text-gray-600">
          ...project I've done was joining a pre-seed startup, architecting
          their application, and bringing their idea from zero to one,
          ultimately going for funding.
        </p>
      </div>
    </div>
  );
};

export default InfoCards;
