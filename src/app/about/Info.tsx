import React, { FunctionComponent } from "react";
import { BiIdCard, BiMap, BiCodeAlt } from "react-icons/bi";

const infoList: Array<{
  Icon: React.ComponentType;
  title: string;
  subtitle: string;
}> = Array(
  {
    Icon: BiIdCard,
    title: "Licensed",
    subtitle: "Mechanical Engineer",
  },
  {
    Icon: BiMap,
    title: "Location",
    subtitle: "Philippines",
  },
  {
    Icon: BiCodeAlt,
    title: "Studied",
    subtitle: "The Odin Project",
  },
);

const Info: FunctionComponent = () => {
  return (
    <div className="mb-8 grid grid-cols-[repeat(3,140px)] gap-2 md:justify-center ss:grid-cols-[repeat(3,1fr)] xs:grid-cols-[repeat(2,1fr)]">
      {infoList.map((info) => {
        return (
          <div className="flex flex-col items-center rounded-xl border border-solid border-[#0000001a] bg-white px-5 py-4 text-center md:px-2 md:py-3">
            <info.Icon />
            <h3 className="text-sm font-medium text-title">{info.title}</h3>
            <span className="text-[0.625rem]">{info.subtitle}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
