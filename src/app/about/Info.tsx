import React, { FunctionComponent } from "react";
import { infoData } from "@/data/HomeData";

const Info: FunctionComponent = () => {
  return (
    <div className="mb-8 grid grid-cols-[repeat(3,140px)] gap-2 md:justify-center ss:grid-cols-[repeat(3,1fr)] xs:grid-cols-[repeat(2,1fr)]">
      {infoData.map(({ Icon, title, subtitle }) => {
        return (
          <div className="flex flex-col items-center rounded-xl border border-solid border-[#0000001a] bg-white px-2 py-3 text-center">
            <Icon className="text-tile mb-2 text-2xl" />
            <h3 className="text-sm font-medium text-title">{title}</h3>
            <span className="text-[0.625rem]">{subtitle}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
