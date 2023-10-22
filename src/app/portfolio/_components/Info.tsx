import React, { FunctionComponent } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export type InfoProps = {
  href?: string;
};

const Info: FunctionComponent<InfoProps> = ({ href }) => {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-3 left-3 box-border flex cursor-pointer items-center rounded-full border-[1px] border-[rgba(0,0,0,0.3)] p-1 transition-all delay-[0s] duration-[0.1s] ease-linear hover:outline hover:outline-4 hover:outline-[#d7d7d79a]"
    >
      <HiMiniArrowUpRight className="text-title" />
    </a>
  ) : null;
};

export default Info;
