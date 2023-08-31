import React, { FunctionComponent } from "react";
import SkillsCard from "./SkillsCard";
import { frontendSkills, otherSkills, SkillObject } from "./SkillLists";

interface StyleProps {
  sectionClass: string;
}

const Skills: FunctionComponent<StyleProps> = ({ sectionClass }) => {
  return (
    <section className={sectionClass} id="skills">
      <h2 className="text-center text-3xl font-semibold text-title md:text-2xl">
        Skills
      </h2>
      <span className="mb-16 block text-center text-sm md:text-[.8] sm:mb-12">
        My Technical Level
      </span>
      <div className="mx-auto grid max-w-[968px] grid-cols-[repeat(2,350px)] justify-center gap-6 gap-x-12 md:mx-6 md:grid-cols-[max-content] md:gap-y-8 ss:grid-cols-[1fr] xs:mx-4">
        <SkillsCard title="Frontend Developement" skill={frontendSkills} />
        <SkillsCard title="Other Languages" skill={otherSkills} />
      </div>
    </section>
  );
};

export default Skills;
