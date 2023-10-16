import React, { FunctionComponent } from "react";

export type InfoProps = {
  title: string;
};

const Info: FunctionComponent<InfoProps> = ({ title }) => {
  return (
    <div className="absolute inset-x-0 bottom-0  bg-gradient-to-t from-gray-700 via-gray-500 to-gray-100 p-4 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
      <span>{title}</span>
      <span>Title</span>
    </div>
  );
};

export default Info;
