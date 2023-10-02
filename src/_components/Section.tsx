import React, { FunctionComponent } from "react";

export type SectionProps = {
  classNameProp?: string;
  id?: string;
  children: React.ReactNode;
};

const Section: FunctionComponent<SectionProps> = ({
  classNameProp = "",
  id,
  children,
}) => {
  return (
    <section
      className={`px-0 pb-8 pt-24 sm:px-0 sm:pb-16 sm:pt-8 ${classNameProp}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
