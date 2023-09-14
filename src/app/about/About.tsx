import React, { FunctionComponent } from "react";
import Section from "@/_components/Section";
import Title from "@/_components/Title";
import Subtitle from "@/_components/Subtitle";
import Info from "./Info";
import AboutImage from "./Image";
import LinkSvg from "@/_components/LinkSVG";
import { FileSVG } from "@/_components/SVG";
// import CV

interface StyleProps {}

const About: FunctionComponent<StyleProps> = ({}) => {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <Subtitle>My Introduction</Subtitle>
      <div className="mx-auto grid max-w-[968px] grid-cols-[repeat(2,1fr)] items-center md:mx-6 md:grid-cols-[1fr] md:gap-y-10 xs:mx-4 ">
        <AboutImage />
        <div className="md:text-center">
          <Info />
          <p className="mb-10 py-0 pl-0 pr-16 md:mb-8 md:px-20 md:py-0 ss:p-0">
            I'm a self-taught front-end developer with an inherent curiosity,
            constantly dedicated to enhancing my skills and knowledge.
          </p>
          <LinkSvg href="cv" download={true}>
            Download CV&nbsp;
            <FileSVG />
          </LinkSvg>
        </div>
      </div>
    </Section>
  );
};

export default About;
