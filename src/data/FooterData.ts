import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
} from "react-icons/bi";
import { IconType } from "react-icons";

export type TpageLinksData = {
  title: string;
  href: string;
};

export const pageLinksData: TpageLinksData[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Qualifications",
    href: "#qualifications",
  },
];

export type TsocialLinksData = {
  Icon: IconType;
  href: string;
};

export const socialLinksData: TsocialLinksData[] = [
  {
    Icon: BiLogoGithub,
    href: "https://github.com/hayaman3",
  },
  {
    Icon: BiLogoLinkedinSquare,
    href: "https://www.linkedin.com/in/kevin-larry-haya-458958198/",
  },
  {
    Icon: BiLogoFacebookSquare,
    href: "https://www.facebook.com/kevinlarry.haya/",
  },
];
