import React, { FunctionComponent, ReactNode } from "react";

type LinkSVGProps = {
  children: ReactNode;
  href: any;
  classNameProp?: string;
  download?: boolean;
};

const LinkSvg: FunctionComponent<LinkSVGProps> = ({
  children,
  href,
  classNameProp = "",
  download = false,
}) => {
  return (
    <a
      download={download}
      href={href}
      className={`inline-flex items-center rounded-2xl bg-title px-8 py-5 font-medium text-white hover:bg-black md:px-7 md:py-4 ${classNameProp}`}
    >
      {children}
    </a>
  );
};

export default LinkSvg;
