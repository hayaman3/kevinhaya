import React, { FunctionComponent } from "react";

export type SubitleProps = {
  children: React.ReactNode;
};

const Subtitle: FunctionComponent<SubitleProps> = ({ children }) => {
  return (
    <p className="mb-16 block text-center text-sm md:text-[.8rem] sm:mb-12">
      {children}
    </p>
  );
};

export default Subtitle;
