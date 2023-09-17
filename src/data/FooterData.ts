import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
} from "react-icons/bi";
import { IconType } from "react-icons";

export type pageLinksDataObjectType = {
  title: string;
  href: string;
};

export const pageLinksData: pageLinksDataObjectType[] = [
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

export type socialLinksDataObjectType = {
  Icon: IconType;
  href: string;
};

export const socialLinksData: socialLinksDataObjectType[] = [
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
