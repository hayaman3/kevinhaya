import React from "react";

interface DataItemProps {
  data: string;
}

const DataItem: React.FC<DataItemProps> = ({ data }) => {
  return <div className="flex-1 p-4">{data}</div>;
};

export default DataItem;
