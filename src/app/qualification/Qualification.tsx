import React, { FunctionComponent } from "react";
import Section from "@/_components/Section";
import Title from "@/_components/Title";
import Subtitle from "@/_components/Subtitle";
import QualificationMain from "./QualificationMain";

interface StyleProps {
  //no props
}

const Qualification: FunctionComponent<StyleProps> = ({}) => {
  return (
    <Section id="qualification">
      <Title>Qualification</Title>
      <Subtitle>My Journey</Subtitle>
      <QualificationMain />
    </Section>
  );
};

export default Qualification;
