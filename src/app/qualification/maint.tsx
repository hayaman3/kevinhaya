import React from "react";
import DataLayout from "./DataLayout";

const Trial: React.FC = () => {
  const data = ["data1", "data2", "data3", "data4"];

  return (
    <div>
      <DataLayout data={data} />
    </div>
  );
};

export default Trial;
