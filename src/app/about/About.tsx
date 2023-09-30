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
      <div className="mx-auto grid max-w-[968px] grid-cols-[.8fr,1fr] items-center justify-items-center md:mx-6 md:grid-cols-[1fr] md:gap-y-10 xs:mx-4 ">
        <AboutImage />
        <div className="flex flex-col items-center md:text-center">
          <Info />
          <p className="mx-auto mb-10 px-12 md:mb-8 md:px-20 md:py-0 ss:p-0">
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
