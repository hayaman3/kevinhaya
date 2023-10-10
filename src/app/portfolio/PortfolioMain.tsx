import React, { FunctionComponent } from "react";
import Image from "next/image";
import Cell from "./_components/Cell";

export type PortfolioMainProps = {
  //no props
};

const testStyle = "border-[1px] border-[rgba(0,0,0,0.1)]";

const PortfolioMain: FunctionComponent<PortfolioMainProps> = ({}) => {
  return (
    <div className="mx-auto grid aspect-[2/3] max-w-[700px] grid-cols-4 gap-4 p-4">
      <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white p-4">
        <div className="relative h-full w-full">
          <Image
            src="/./images/portfolio/trial.png"
            alt="logo"
            layout="fill"
            // // objectFit="cover"
            // width={50}
            // height={50}
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative row-span-1 rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white p-4">
        {/* <ImageGrey /> */}
      </div>
      {/* <div className="col-span-1 row-span-2 rounded-2xl border-[1px] border-[rgba(0,0,0,0.1)] bg-white p-4">

      </div> */}
      <Cell row={2} col={1} classNameProp={testStyle}>
        <div></div>
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

// type ImageProps = {
//   //no props
// };

// const ImageGrey: FunctionComponent<ImageProps> = ({}) => {
//   return (
//     <Image
//       src="/./images/portfolio/grey.jpg"
//       alt="logo"
//       layout="fill"
//       objectFit="cover"
//     />
//   );
// };

// const PortfolioCard: FunctionComponent = ({}) => {
//   return (
//     <Image
//       src="/./images/kevin.png"
//       alt="logo"
//       priority
//       fill
//       sizes="(max-width: 768px) 200px, (max-width: 992px) 250px, 300px"
//       placeholder="blur"
//       blurDataURL={"/./images/kevin.png"}
//       className="-z-10 object-cover grayscale-[60%]"
//     />
//   );
// };
