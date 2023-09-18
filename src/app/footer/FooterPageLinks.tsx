import React, { FunctionComponent } from "react";
import { pageLinksData, pageLinksDataObjectType } from "@/data/FooterData";

export type FooterPageLinksProps = {
  //no props
};

const FooterPageLinks: FunctionComponent<FooterPageLinksProps> = ({}) => {
  return (
    <ul className="gap-y-1x flex flex-col justify-center ">
      {pageLinksData.map(({ title, href }) => (
        <li>
          <a href={href} className="text-sm text-title hover:text-black">
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterPageLinks;
