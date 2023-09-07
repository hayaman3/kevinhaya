import { IconType } from "react-icons";
import { BiMailSend, BiLogoMessenger, BiMap } from "react-icons/bi";

export interface ContactDataObjectType {
  Icon: IconType;
  title: string;
  subtitle: string;
  link: string;
  linkText: string;
}

export const contactData: ContactDataObjectType[] = [
  {
    Icon: BiMailSend,
    title: "Email",
    subtitle: "kevin.hayaproj@gmail.com",
    link: "mailto:kevin.hayaproj@gmail.com",
    linkText: "Message me",
  },
  {
    Icon: BiLogoMessenger,
    title: "Messenger",
    subtitle: "Kevin Haya",
    link: "https://m.me/kevinlarry.haya",
    linkText: "Message me",
  },
  {
    Icon: BiMap,
    title: "Location",
    subtitle: "Philippines",
    link: "https://www.google.com/maps/place/Baguio,+Benguet/@16.3995547,120.55367,13z/data=!3m1!4b1!4m6!3m5!1s0x3391a16879def13f:0x8edef534be3a75c0!8m2!3d16.4023332!4d120.5960071!16zL20vMDE1bDFf",
    linkText: " My City",
  },
];
