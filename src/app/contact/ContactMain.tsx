import React, { FunctionComponent, ReactNode } from "react";

export type ContactMainProps = {
  children: ReactNode;
};

const Main: FunctionComponent<ContactMainProps> = ({ children }) => {
  return (
    <div className="mx-auto grid h-max max-w-[968px] grid-cols-[repeat(2,max-content)] justify-center gap-6 gap-x-24 pb-12 md:mx-6 md:gap-x-12 ss:grid-cols-[1fr] ss:gap-y-12 xs:mx-4">
      {children}
    </div>
  );
};

export default Main;
