import React, { FunctionComponent } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import classNames from "classnames";

export type InfoProps = {
  href?: string;
};

const Info: FunctionComponent<InfoProps> = ({ href }) => {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        "absolute bottom-3 left-3 box-border flex cursor-pointer items-center",
        "rounded-full border-[1px] border-[rgba(0,0,0,0.3)] p-1",
        "transition-all delay-[0s] duration-[0.1s] ease-linear",
        "hover:outline hover:outline-4 hover:outline-[#d7d7d79a]",
        "md:bottom-2 md:left-2",
        "ss:bottom-1.5 ss:left-1.5 ss:p-[.17rem]",
      )}
    >
      <HiMiniArrowUpRight className="text-title md:text-xs ss:text-[.5rem]" />
    </a>
  ) : null;
};

export default Info;
