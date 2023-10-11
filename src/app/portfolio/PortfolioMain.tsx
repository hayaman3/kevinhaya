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
    <div className="mx-auto grid aspect-[2/3] max-w-[700px] grid-cols-4 gap-4 p-4">
      <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white">
        <div className="relative h-full w-full">
          {/* <Image
            src="/./images/portfolio/trial.png"
            alt="logo"
            layout="fill"
            // // objectFit="cover"
            // width={50}
            // height={50}
            className="object-cover"
          /> */}
          <ImageComponent props={portfolioData[0]} />
        </div>
      </div>

      <Cell row={1} col={1} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>

      <Cell row={2} col={1} classNameProp={testStyle}>
        <ImageComponent props={portfolioData[0]} />
      </Cell>

      <div className="col-span-1 row-span-2 rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-2 row-span-1 rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-1 row-span-1 rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-2 row-span-2 rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-2 row-span-1 rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-2 row-span-2 rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white p-4">
        {/* <ImageGrey /> */}
      </div>

      <div className="col-span-2 row-span-1 rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white p-4">
        {/* <ImageGrey /> */}
      </div>
    </div>
  );
};

export default PortfolioMain;
// 324px/294px
