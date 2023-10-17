import React, { FunctionComponent } from "react";

export type InfoProps = {
  title: string;
};

const Info: FunctionComponent<InfoProps> = ({ title }) => {
  return (
    <div className="h-full w-full rounded-md border border-gray-100 bg-gray-200 bg-opacity-10 bg-clip-padding p-4 opacity-0 backdrop-blur-lg backdrop-filter transition duration-300 ease-in-out group-hover:opacity-100">
      <span className="text-ellipsis text-white">{title}</span>
    </div>
  );
};

export default Info;
