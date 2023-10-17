import React, { FunctionComponent } from "react";
import Image from "next/image";
import ImageComponent from "./_components/Image";
import Cell from "./_components/Cell";
import { portfolioData, TportfolioData } from "@/data/PortfolioData";

export type PortfolioMainProps = {
  //no props
};

const testStyle = "border-[1px] border-[rgba(0,0,0,0.1)]";

const PortfolioMain: FunctionComponent<PortfolioMainProps> = ({}) => {
  return (
    <div className="mx-auto grid aspect-[2/3] max-w-[992px] grid-cols-4 grid-rows-6 gap-4 p-4">
      <Cell row={2} col={2} data={portfolioData[0]} classNameProp={testStyle} />

      <Cell row={1} col={1} data={portfolioData[0]} classNameProp={testStyle} />

      <Cell row={2} col={1} data={portfolioData[0]} classNameProp={testStyle} />

      <Cell row={2} col={1} data={portfolioData[0]} classNameProp={testStyle} />

      <Cell row={1} col={2} data={portfolioData[0]} classNameProp={testStyle} />

      <Cell row={1} col={1} data={portfolioData[0]} classNameProp={testStyle} />

      <Cell row={2} col={2} data={portfolioData[0]} classNameProp={testStyle} />

      <Cell row={1} col={2} data={portfolioData[0]} classNameProp={testStyle} />

      <Cell row={2} col={2} data={portfolioData[0]} classNameProp={testStyle} />

      <Cell row={1} col={2} data={portfolioData[0]} classNameProp={testStyle} />
    </div>
  );
};

export default PortfolioMain;
