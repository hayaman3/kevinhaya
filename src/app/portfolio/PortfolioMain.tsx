import React, { FunctionComponent } from "react";
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
        "sm:mx-16 sm:aspect-[1/6] sm:grid-cols-2 sm:grid-rows-[repeat(14,minmax(0,1fr))] sm:gap-3 ",
        "ss:mx-8 ss:gap-2",
      )}
    >
      <Cell variant={"bigSquare"} data={portfolioData[1]} />

      <Cell variant={"smallSquare"} data={portfolioData[0]} />

      <Cell variant={"portrait"} data={portfolioData[3]} />

      <Cell variant={"portrait"} data={portfolioData[0]} />

      <Cell variant={"landscape"} data={portfolioData[0]} />

      <Cell variant={"smallSquare"} data={portfolioData[2]} />

      <Cell variant={"bigSquare"} data={portfolioData[0]} />

      <Cell variant={"landscape"} data={portfolioData[0]} />

      <Cell variant={"bigSquare"} data={portfolioData[0]} />

      <Cell variant={"landscape"} data={portfolioData[0]} />
    </div>
  );
};

export default PortfolioMain;
