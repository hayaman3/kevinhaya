import React, { FunctionComponent } from "react";
import Image from "next/image";
import ImageComponent from "./_components/Image";
import Cell from "./_components/Cell";
import { portfolioData, TportfolioData } from "@/data/PortfolioData";
import classNames from "classnames";

export type PortfolioMainProps = {
  //no props
};

const PortfolioMain: FunctionComponent<PortfolioMainProps> = ({}) => {
  return (
    <div
      className={classNames(
        "mx-auto grid aspect-[2/3] max-w-[992px] grid-cols-4 grid-rows-6 gap-4 p-4",
        "ss:aspect-auto ss:auto-cols-[300px] ss:auto-rows-[300px]",
      )}
    >
      <Cell row={2} col={2} data={portfolioData[1]} />

      <Cell row={1} col={1} data={portfolioData[0]} />

      <Cell row={2} col={1} data={portfolioData[3]} />

      <Cell row={2} col={1} data={portfolioData[0]} />

      <Cell row={1} col={2} data={portfolioData[0]} />

      <Cell row={1} col={1} data={portfolioData[2]} />

      <Cell row={2} col={2} data={portfolioData[0]} />

      <Cell row={1} col={2} data={portfolioData[0]} />

      <Cell row={2} col={2} data={portfolioData[0]} />

      <Cell row={1} col={2} data={portfolioData[0]} />
    </div>
  );
};

export default PortfolioMain;
