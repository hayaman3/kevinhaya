import React, { FunctionComponent } from "react";
import QualificationCard from "./QualificationCard";
import MiddleLine from "./MiddleLine";
import { QualificationDataObjectType } from "../../../data/QualificationData";

interface QualificationRowProps {
  prop: QualificationDataObjectType;
}

const QualificationRowRight: FunctionComponent<QualificationRowProps> = ({
  prop,
}) => {
  return (
    <div className="grid grid-cols-[1fr_max-content_1fr] justify-center gap-x-6 sm:gap-2">
      <div></div>
      <MiddleLine />
      <QualificationCard prop={prop} />
    </div>
  );
};

const QualificationRowLeft: FunctionComponent<QualificationRowProps> = ({
  prop,
}) => {
  return (
    <div className="grid grid-cols-[1fr_max-content_1fr] justify-center gap-x-6 sm:gap-2">
      <QualificationCard prop={prop} />
      <MiddleLine />
      <div></div>
    </div>
  );
};

export { QualificationRowRight, QualificationRowLeft };
