import React, { FunctionComponent } from "react";
import QualificationMain from "./QualificationMain";
interface StyleProps {
  sectionClass: string;
}

const Qualification: FunctionComponent<StyleProps> = ({ sectionClass }) => {
  return (
    <section className={sectionClass} id="qualifications">
      <h2 className="text-center text-3xl font-semibold text-title md:text-2xl">
        Qualification
      </h2>
      <span className="mb-16 block text-center text-sm md:text-[.8rem] sm:mb-12">
        My Journey
      </span>
      <QualificationMain />
    </section>
  );
};

export default Qualification;
