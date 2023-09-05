import React, { FunctionComponent } from "react";
import QualificationCard from "./QualificationCard";
import MiddleLine from "./MiddleLine";
// type QualificationRowProps = {
//   // link: string;
//   // subtitle: string;
//   // Icon: IconType;
// };

const QualificationRow: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-[1fr_max-content_1fr] justify-center gap-x-6 sm:gap-2">
      <QualificationCard />
      <MiddleLine />
    </div>
  );
};

export default QualificationRow;
