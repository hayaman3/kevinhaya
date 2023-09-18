import React, { FunctionComponent, ReactNode } from "react";

export type LinksContainerProps = {
  children: ReactNode;
};

const LinksContainer: FunctionComponent<LinksContainerProps> = ({
  children,
}) => {
  return (
    <div className="mx-auto flex max-w-[968px] justify-around pb-8">
      {children}
    </div>
  );
};

export default LinksContainer;
