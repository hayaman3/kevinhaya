import React, { FunctionComponent } from "react";
import ImageComponent from "./Image";
import { TportfolioData } from "@/data/PortfolioData";
import Info from "./Info";
import classNames from "classnames";

const width = {
  1: "w-[150px]",
  2: "w-[300px]",
};

const height = {
  1: "h-[150px]",
  2: "h-[300px]",
};

export type CellProps = {
  row: 1 | 2;
  col: 1 | 2;
  data: TportfolioData;
};

const Cell: FunctionComponent<CellProps> = ({ row, col, data }) => {
  return (
    <div
      className={classNames(
        `col-span-${col} row-span-${row}`,
        " relative grid place-content-center overflow-hidden",
        "rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white",
        // "ss:grid-cols-1 ss:grid-rows-1",
        `ss:${height[row]}`,
        `ss:${width[col]}`,
      )}
    >
      <ImageComponent props={data} />
      <Info href={data.href} />
    </div>
  );
};

export default Cell;
