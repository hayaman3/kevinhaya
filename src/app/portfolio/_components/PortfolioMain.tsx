import React, { FunctionComponent } from "react";
import Image from "next/image";
export type PortfolioMainProps = {
  //no props
};

const PortfolioMain: FunctionComponent<PortfolioMainProps> = ({}) => {
  return (
    <div className="mx-auto grid aspect-square max-w-[700px] grid-cols-4 gap-2 p-4">
      <div className="relative col-span-2 row-span-2 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100">
        {/* <ImageGrey /> */}
      </div>
      <div className="relative row-span-1 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100 p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-1 row-span-2 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100 p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-1 row-span-2 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100 p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-2 row-span-1 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100 p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-1 row-span-1 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100 p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-2 row-span-2 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100 p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-2 row-span-1 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100 p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-2 row-span-2 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100 p-4">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-1 row-span-1 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100 p-4 opacity-0">
        {/* <ImageGrey /> */}
      </div>
      <div className="col-span-1 row-span-1 rounded-[2rem] border-[1px] border-neutral-400 bg-neutral-100 p-4">
        {/* <ImageGrey /> */}
      </div>
    </div>
  );
};

export default PortfolioMain;

type ImageProps = {
  //no props
};

const ImageGrey: FunctionComponent<ImageProps> = ({}) => {
  return (
    <Image
      src="/./images/portfolio/grey.jpg"
      alt="logo"
      layout="fill"
      objectFit="cover"
    />
  );
};
