import React from 'react'
import ExperienceDisplay from './Experence'
import Project from './Project'
import InfoCards from './InfoCards';

export default function Portifolio() {
  return (
    <main>
      <section className="flex flex-row justify-center items-start gap-2">
        <Project />
        <ExperienceDisplay />
      </section>
      <InfoCards/>
    </main>
  );
}
