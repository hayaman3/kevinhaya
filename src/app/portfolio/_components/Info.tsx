import React, { FunctionComponent } from "react";

export type InfoProps = {
  //no props
};

const Info: FunctionComponent<InfoProps> = ({}) => {
  return (
    <div className="opacity-0 group-hover:opacity-100">
      <span>Test</span>
    </div>
  );
};

export default Info;
