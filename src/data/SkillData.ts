import { IconType } from "react-icons";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoReact,
  BiLogoJava,
  BiLogoPython,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiC, SiPhp, SiCplusplus } from "react-icons/si";

export type TskillsData = {
  Icon: IconType;
  skill: string;
  subtitle?: string;
};

const frontendSkillsData: TskillsData[] = [
  {
    Icon: BiLogoHtml5,
    skill: "HTML",
  },
  {
    Icon: BiLogoCss3,
    skill: "CSS",
  },
  {
    Icon: BiLogoJavascript,
    skill: "JavaScript",
  },
  {
    Icon: BiLogoTypescript,
    skill: "TypeScript",
  },
  {
    Icon: BiLogoTailwindCss,
    skill: "Tailwind",
  },
  {
    Icon: BiLogoGit,
    skill: "Git",
  },
  {
    Icon: BiLogoReact,
    skill: "React",
  },
  {
    Icon: TbBrandNextjs,
    skill: "Next.Js",
  },
];

const otherSkillsData: TskillsData[] = [
  {
    Icon: SiC,
    skill: "C",
    subtitle: "basic",
  },
  {
    Icon: BiLogoJava,
    skill: "Java",
    subtitle: "basic",
  },
  {
    Icon: BiLogoPython,
    skill: "Python",
    subtitle: "basic",
  },
  {
    Icon: SiPhp,
    skill: "PHP",
    subtitle: "basic",
  },
  {
    Icon: SiCplusplus,
    skill: "C++",
    subtitle: "basic",
  },
];

export { frontendSkillsData, otherSkillsData };
