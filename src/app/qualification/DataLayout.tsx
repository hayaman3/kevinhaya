import React from "react";

interface DataLayoutProps {
  data: string[];
}

const DataLayout: React.FC<DataLayoutProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className="text-center">
            {index % 2 === 0 && <span>{item}</span>}
          </div>
          {index % 2 === 0 && <div className="border-t border-gray-400"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DataLayout;
