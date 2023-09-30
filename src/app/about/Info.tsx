import React, { FunctionComponent } from "react";
import { infoData } from "@/data/HomeData";

const Info: FunctionComponent = () => {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {infoData.map(({ Icon, title, subtitle }) => {
        return (
          <div className="flex w-[150px] flex-col items-center rounded-xl border border-solid border-[#0000001a] bg-white px-2 py-3 text-center ss:flex-[1_1_0px]">
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
