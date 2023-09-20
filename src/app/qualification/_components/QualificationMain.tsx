import React, { FunctionComponent } from "react";
import {
  QualificationRowRight,
  QualificationRowLeft,
} from "./QualificationRow";
import {
  qualificationData,
  QualificationDataObjectType,
} from "@/data/QualificationData";

export type QualificationMainProps = {
  //no props
};

const QualificationMain: FunctionComponent<QualificationMainProps> = ({}) => {
  return (
    <div className="mx-auto grid max-w-[968px] justify-center md:mx-6 xs:mx-4">
      {qualificationData.map((item, index) =>
        index % 2 === 0 ? (
          <QualificationRowLeft prop={item} key={index} />
        ) : (
          <QualificationRowRight prop={item} key={index} />
        ),
      )}
    </div>
  );
};

export default QualificationMain;
