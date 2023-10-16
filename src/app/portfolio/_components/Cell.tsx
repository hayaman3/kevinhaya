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
  // const ImageData
  // const InfoData

  const { title, src } = data;

  return (
    <div
      className={`col-span-${col} row-span-${row} group relative overflow-hidden rounded-2xl bg-white ${classNameProp}`}
    >
      <ImageComponent props={data} />
      <Info title={title} />
    </div>
  );
};

export default Cell;
