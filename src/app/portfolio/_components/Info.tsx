import React, { FunctionComponent } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export type InfoProps = {
  href: string;
};

const Info: FunctionComponent<InfoProps> = ({ href }) => {
  return (
    <a
      href={href}
      className="absolute bottom-3 left-3 flex cursor-pointer items-center overflow-hidden rounded-full bg-title p-1 transition-shadow delay-[0s] duration-[0.2s] ease-[ease-out]"
    >
      <HiMiniArrowUpRight className="text-zinc-50" />
    </a>
  );
};

export default Info;
