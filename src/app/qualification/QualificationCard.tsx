import React, { FunctionComponent } from "react";
import {
  QualificationDataObjectType,
  qualificationData,
} from "./QualificationCardData";

export type QualificationCardProps = {
  //no props
};

const { title, link, linkText, Icon, subtitle } = qualificationData[0];

const QualificationCard: FunctionComponent<QualificationCardProps> = ({}) => {
  return (
    <div>
      <h3 className="text-base font-medium text-title">{title}</h3>
      <span className="mb-4; inline-block text-sm">
        <a
          href={link}
          className="after:block after:w-6 after:border-b after:border-solid after:border-b-title after:content-[''] hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </span>
      {/* <div className="qualification-data-icon"> */}
      <div className="flex items-center gap-2 text-sm">
        <Icon className="text-base" />
        {subtitle}
      </div>
    </div>
  );
};

export default QualificationCard;
