'use client'

import React, { useState } from 'react'
import Expertise from './Expertise'
import Bio from './Bio'
import Portifolio from './Portifolio';
import WorkExperience from './WorkExperience';
import ExperienceDisplay from './Experence';
import ExperienceSection from './Experience';
import EducationSection from './Education';
import SkillsSection from './Skills';
import ExperienceSkills from './Skills';

export default function Content() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const AccordionItem = ({ title, children, section }: { title: string; children: React.ReactNode; section: string }) => (
    <div className="border-b">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left"
        onClick={() => toggleSection(section)}
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`size-6 transition-transform ${openSection === section ? 'rotate-180' : ''}`}
        >
          <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
        </svg>
      </button>
      {openSection === section && <div className="py-4 px-6">{children}</div>}
    </div>
  );

  return (
    <main className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1000px] mx-auto">
          <section className="py-4">
            <h1 className="text-3xl font-bold text-[#204ECF]">
              Gianluca Vaccarini
            </h1>
            <h2 className="flex flex-row items-center text-[#07947C] gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">Verified Expert</span> in Engineering
            </h2>
          </section>

          <section className="py-4">
            <ul className="flex flex-col gap-3 text-slate-700 text-lg">
              <li className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 font-light"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3>Full-stack Developer</h3>
              </li>
              <li className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <h3>Seattle, WA, United States</h3>
              </li>
              <li className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <h3>Toptal member since January 28, 2022</h3>
              </li>
            </ul>
          </section>
          <Expertise />
          <Bio />
          <Portifolio />

          <section className="border-t overflow-hidden">
            <AccordionItem title="Work Experience" section="work">
              <WorkExperience />
            </AccordionItem>
            <AccordionItem title="Experience" section="experience">
              <ExperienceSection />
            </AccordionItem>
            <AccordionItem title="Education" section="education">
              <EducationSection />
            </AccordionItem>
            <AccordionItem title="Skills" section="skills">
              <ExperienceSkills />
            </AccordionItem>
          </section>
        </div>
      </div>
    </main>
  );
}
