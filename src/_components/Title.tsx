import React, { FunctionComponent } from "react";

export type TitleProps = {
  children: React.ReactNode;
};

const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return (
    <h2 className="text-center text-3xl font-semibold leading-8 text-title md:text-2xl">
      {children}
    </h2>
  );
};

export default Title;
