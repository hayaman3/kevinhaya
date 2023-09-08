import React, { FunctionComponent } from "react";
import Section from "@/_components/Section";
import Title from "@/_components/Title";
import Subtitle from "@/_components/Subtitle";
import SkillsCard from "./SkillsCard";
import {
  frontendSkills,
  otherSkills,
  SkillObjectType,
} from "../../data/SkillData";

interface StyleProps {}

const Skills: FunctionComponent<StyleProps> = ({}) => {
  return (
    <Section id="skills">
      <Title>Skills</Title>
      <Subtitle>My Technical Skills</Subtitle>
      <div className="mx-auto grid max-w-[968px] grid-cols-[repeat(2,350px)] justify-center gap-6 gap-x-12 md:mx-6 md:grid-cols-[max-content] md:gap-y-8 ss:grid-cols-[1fr] xs:mx-4">
        <SkillsCard title="Frontend Developement" skill={frontendSkills} />
        <SkillsCard title="Other Languages" skill={otherSkills} />
      </div>
    </Section>
  );
};

export default Skills;
