import { BiIdCard, BiMap, BiCodeAlt } from "react-icons/bi";
import { IconType } from "react-icons";

export interface infoDataObjectType {
  Icon: IconType;
  title: string;
  subtitle: string;
}

export const infoData: infoDataObjectType[] = [
  {
    Icon: BiIdCard,
    title: "Licensed",
    subtitle: "Mechanical Engineer",
  },
  {
    Icon: BiMap,
    title: "Location",
    subtitle: "Philippines",
  },
  {
    Icon: BiCodeAlt,
    title: "Studied",
    subtitle: "The Odin Project",
  },
];
