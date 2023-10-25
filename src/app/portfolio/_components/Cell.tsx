import React, { FunctionComponent } from "react";
import ImageComponent from "./Image";
import { TportfolioData } from "@/data/PortfolioData";
import Info from "./Info";
import classNames from "classnames";

type Variants = "portrait" | "landscape" | "smallSquare" | "bigSquare";

const variantStyle: { [key in Variants]: string } = {
  portrait: "col-span-1 row-span-2",
  landscape: "col-span-2 row-span-1",
  smallSquare: "col-span-1 row-span-1",
  bigSquare: "col-span-2 row-span-2",
};

export type CellProps = {
  variant: Variants;
  data: TportfolioData;
};

const Cell: FunctionComponent<CellProps> = ({ variant, data }) => {
  return (
    <div
      className={classNames(
        "relative grid place-content-center overflow-hidden",
        "rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white",
        `${variantStyle[variant]}`,
      )}
    >
      <ImageComponent props={data} />
      <Info href={data.href} />
    </div>
  );
};

export default Cell;
