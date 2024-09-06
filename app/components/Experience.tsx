import React from "react";

interface Experience {
  title: string;
  url: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Refer Me",
    url: "http://www.refer.me",
    description:
      "Refer Me allows job seekers to get referrals from people in the industry. Companies who our referrers work for get top talent through their hiring pipelines via refer.me. The platform also supports resume reviews, career coaching, and mock interviews.",
  },
  {
    title: "Noonlight Dealer Portal",
    url: "https://dealer-portal-beta.noonlight.com/login",
    description:
      "A React-based application built out for a POC for Noonlight within three weeks. I led the client-side architecture and development while also working with the leadership and team using best UI/UX practices. The application uses React, React-Query, Jest, and Cypress.",
  },
  {
    title: "Interview.study",
    url: "http://www.interview.study",
    description:
      "Interview.study is a groundbreaking AI-powered interview preparation platform I had the privilege to develop and own. This platform offers users an unparalleled interactive practice experience, enhanced by intelligent, AI-driven feedback and insights, which are tailored to improve their interviewing skills.\n\nMy involvement spanned the entire development lifecycle of this advanced full-stack application—from conceptualization to deployment. I engineered a robust database architecture and crafted an engaging user interface and user experience, ensuring the application was both intuitive and efficient for users. Central to our platform's innovation is the implementation of a vectorized semantic search powered by large language models (LLMs). This feature significantly elevates the platform's capability to offer personalized experiences, enhance search accuracy, and facilitate more natural conversational interactions. The seamless integration of a continuous integration/continuous deployment (CI/CD) pipeline was a pivotal aspect of my role, enabling streamlined deployments and ensuring the platform remains cutting-edge",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 flex justify-between items-center">
        Experience
        <span className="text-blue-500 cursor-pointer">^</span>
      </h1>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">{exp.title}</h2>
          <a href={exp.url} className="text-blue-600 hover:underline">
            {exp.url}
          </a>
          <p className="mt-2 text-gray-700 whitespace-pre-line">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
