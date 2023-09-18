import React, { FunctionComponent } from "react";
import { socialLinksData, socialLinksDataObjectType } from "@/data/FooterData";

export type FooterSocialsLinksProps = {
  //no props
};

const FooterSocialsLinks: FunctionComponent<FooterSocialsLinksProps> = ({}) => {
  return (
    <ul className="flex gap-x-2">
      {socialLinksData.map(({ Icon, href }) => (
        <li>
          <a
            href={href}
            className="inline-flex rounded-lg border border-solid border-[rgba(0,0,0,0.1)] bg-zinc-100 p-2 text-lg text-title hover:text-black md:rounded md:p-[0.3rem]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialsLinks;
