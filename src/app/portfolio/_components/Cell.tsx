import React, { FunctionComponent } from "react";
import ImageComponent from "./Image";
import { TportfolioData } from "@/data/PortfolioData";
import Info from "./Info";

export type CellProps = {
  row: 1 | 2;
  col: 1 | 2;
  data: TportfolioData;
};

const Cell: FunctionComponent<CellProps> = ({ row, col, data }) => {
  return (
    <div
      className={`col-span-${col} row-span-${row} relative grid place-content-center overflow-hidden rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white`}
    >
      <ImageComponent props={data} />
      <Info href={data.href} />
    </div>
  );
};

export default Cell;
