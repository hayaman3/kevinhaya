import React, { FunctionComponent } from "react";
import Section from "@/_components/Section";
import Title from "@/_components/Title";
import Subtitle from "@/_components/Subtitle";
import PortfolioMain from "./PortfolioMain";

export type PortfolioProps = {
  //no props
};

const Portfolio: FunctionComponent<PortfolioProps> = ({}) => {
  return (
    <Section id="projects">
      <Title>Portfolio</Title>
      <Subtitle>Some of my Works</Subtitle>
      <PortfolioMain />
    </Section>
  );
};

export default Portfolio;
