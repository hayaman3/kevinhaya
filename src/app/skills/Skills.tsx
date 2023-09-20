import React, { FunctionComponent } from "react";
import Section from "@/_components/Section";
import Title from "@/_components/Title";
import Subtitle from "@/_components/Subtitle";
import SkillsCard from "./_components/SkillsCard";
import SkillsMain from "./_components/SkillsMain";
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
      <SkillsMain>
        <SkillsCard title="Frontend Developement" skill={frontendSkills} />
        <SkillsCard title="Other Languages" skill={otherSkills} />
      </SkillsMain>
    </Section>
  );
};

export default Skills;
