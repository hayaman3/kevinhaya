import React, { FunctionComponent } from "react";

export type InfoProps = {
  //no props
};

const Info: FunctionComponent<InfoProps> = ({}) => {
  return (
    <div className="absolute inset-x-0 bottom-0  bg-gradient-to-t from-title to-title p-4 opacity-0 transition duration-300 group-hover:opacity-100">
      <span>Title</span>
      <span>Title</span>
    </div>
  );
};

export default Info;
