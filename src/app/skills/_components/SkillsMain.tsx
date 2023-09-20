import React, { FunctionComponent, ReactNode } from "react";

export type SkillsMainProps = {
  children: ReactNode;
};

const SkillsMain: FunctionComponent<SkillsMainProps> = ({ children }) => {
  return (
    <div className="mx-auto grid max-w-[968px] grid-cols-[repeat(2,350px)] justify-center gap-6 gap-x-12 md:mx-6 md:grid-cols-[max-content] md:gap-y-8 ss:grid-cols-[1fr] xs:mx-4">
      {children}
    </div>
  );
};

export default SkillsMain;
