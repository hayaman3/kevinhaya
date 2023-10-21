import React, { FunctionComponent } from "react";
import ImageComponent from "./Image";
import { TportfolioData } from "@/data/PortfolioData";
import Info from "./Info";

export type CellProps = {
  row: 1 | 2;
  col: 1 | 2;
  data: TportfolioData;
  classNameProp?: string;
};

const Cell: FunctionComponent<CellProps> = ({
  row,
  col,
  data,
  classNameProp = "",
}) => {
  return (
    <div
      className={`col-span-${col} row-span-${row} group relative grid place-content-center overflow-hidden rounded-2xl bg-white ${classNameProp}`}
    >
      <ImageComponent props={data} />
      <Info href={data.href} />
    </div>
  );
};

export default Cell;
