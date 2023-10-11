import { BiIdCard, BiMap, BiCodeAlt } from "react-icons/bi";
import { IconType } from "react-icons";

export interface TinfoDataObject {
  Icon: IconType;
  title: string;
  subtitle: string;
}

export const infoData: TinfoDataObject[] = [
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
