import React, { FunctionComponent } from "react";
import { SkillObjectType } from "@/data/SkillData";

type CardProps = {
  title: string;
  skill: SkillObjectType[];
};

const SkillsCard: FunctionComponent<CardProps> = ({ title, skill }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-solid border-[#0000001a] bg-white p-8 md:p-6 ">
      <h3 className="mb-6 text-center text-base font-medium text-title">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 xs:gap-x-5">
        {skill.map((item) => {
          const Icon = item.Icon;
          return (
            <div className="flex items-center gap-x-2" key={item.skill}>
              <Icon className="text-xl text-title" />
              {item?.subtitle ? (
                <div className="flex flex-col gap-x-2 gap-y-0">
                  <h3 className="text-base font-medium leading-[18px] text-title sm:text-sm">
                    {item.skill}
                  </h3>
                  <span className="text-[.625rem] leading-3">
                    {item.subtitle}
                  </span>
                </div>
              ) : (
                <h3 className="text-base font-medium leading-[18px] text-title sm:text-sm">
                  {item.skill}
                </h3>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsCard;
