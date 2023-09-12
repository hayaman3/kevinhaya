import React, { FunctionComponent, ReactNode } from "react";

type LinkSvg = {
  children: ReactNode;
  href: any;
  download?: boolean;
};

const LinkSvg: FunctionComponent<LinkSvg> = ({
  children,
  href,
  download = false,
}) => {
  return (
    <a
      download={download}
      href={href}
      className="inline-flex items-center rounded-2xl bg-title px-8 py-5 font-medium text-white hover:bg-black md:px-7 md:py-4"
    >
      {children}
    </a>
  );
};

export default LinkSvg;
