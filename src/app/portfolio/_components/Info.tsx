import React, { FunctionComponent } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export type InfoProps = {
  href?: string;
};

const Info: FunctionComponent<InfoProps> = ({ href }) => {
  return href ? (
    // <div className="absolute bottom-3 left-3 outline-none hover:outline-2">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // className="absolute bottom-3 left-3  flex cursor-pointer items-center overflow-hidden rounded-full bg-[rgb(117,117,117)] p-1 transition-shadow delay-[0s] duration-[0.2s] ease-[ease-out]"
      className="shadow-3xl absolute bottom-3 left-3 flex cursor-pointer  items-center rounded-full border border-gray-300 bg-[rgb(117,117,117)] p-1 hover:border-4 hover:border-blue-500 "

      // transition-shadow duration-[0.2s] ease-[ease-out] delay-[0s] shadow-[rgb(255,255,255)_0px_0px_0px_1px,rgba(255,255,255,0.5)_0px_0px_0px_6px]
    >
      <HiMiniArrowUpRight className="text-zinc-50" />
    </a>
  ) : // </div>
  null;
};

export default Info;
