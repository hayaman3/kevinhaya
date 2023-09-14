import React, { FunctionComponent } from "react";
import Typewriter from "../utils/Typewriter";
import LinkSvg from "@/_components/LinkSVG";
import { HandSvg, SendSVG } from "@/_components/SVG";

const Data: FunctionComponent = () => {
  return (
    <div className="sm:col-[1/3]">
      <h1 className="mb-1 flex flex-wrap items-center text-4xl font-semibold text-title md:text-[2rem]">
        Kevin Larry Haya
        <HandSvg />
      </h1>

      <div className="h-12">
        <h3 className="mb-4 ml-2 inline-block text-xl font-normal text-title md:text-base">
          <Typewriter
            texts={["Front end Developer", "Mechanical Engineer"]}
            delay={100}
          />
        </h3>
      </div>

      <LinkSvg href="#contact">
        Say Hello
        <SendSVG />
      </LinkSvg>
    </div>
  );
};

export default Data;
