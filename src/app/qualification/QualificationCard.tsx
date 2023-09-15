import React, { FunctionComponent } from "react";
import { QualificationDataObjectType } from "@/data/QualificationData";

export type QualificationCardProps = {
  prop: QualificationDataObjectType;
};

const QualificationCard: FunctionComponent<QualificationCardProps> = ({
  prop,
}) => {
  const { title, link, linkText, Icon, subtitle } = prop;
  return (
    <div>
      <h3 className="text-base font-medium text-title">{title}</h3>
      <span className="mb-4 inline-block text-sm">
        <a
          href={link}
          className="after:block after:w-6 after:border-b after:border-solid after:border-b-title after:content-[''] hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </span>
      <div className="flex items-center gap-2 text-sm">
        <Icon className="text-base" />
        {subtitle}
      </div>
    </div>
  );
};

export default QualificationCard;
