import React, { FunctionComponent } from "react";
import { QualificationDataObjectType } from "@/data/QualificationData";

export type QualificationCardProps = {
  prop: QualificationDataObjectType;
  side?: "left" | "right";
};

const QualificationCard: FunctionComponent<QualificationCardProps> = ({
  prop,
  side,
}) => {
  const { title, link, linkText, Icon, subtitle } = prop;
  return (
    <div className="">
      <h3 className="max-w-[200px] text-base font-medium text-title xs:text-sm">
        {title}
      </h3>
      <span className="mb-4 inline-block text-sm xs:text-xs">
        <a
          href={link}
          className="after:block after:w-6 after:border-b after:border-solid after:border-b-title after:content-[''] hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </span>
      <div className="flex items-center gap-2 text-sm xs:text-xs">
        <Icon className="text-base" />
        {subtitle}
      </div>
    </div>
  );
};

export default QualificationCard;
