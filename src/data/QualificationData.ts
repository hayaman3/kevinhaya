import { IconType } from "react-icons";
import { BiCalendar, BiBook, BiMapPin, BiLogoDevTo } from "react-icons/bi";

export interface TqualificationData {
  title: string;
  link: string;
  linkText: string;
  Icon: IconType;
  subtitle: string;
}

export const qualificationData: TqualificationData[] = [
  {
    title: "Front-end Engineer Internship",
    link: "https://codebility-fe.vercel.app/",
    linkText: "Website",
    Icon: BiLogoDevTo,
    subtitle: "Codebility",
  },
  {
    title: "Web Development",
    link: "https://www.theodinproject.com/",
    linkText: "2022-2023",
    Icon: BiCalendar,
    subtitle: "The Odin Project",
  },
  {
    title: "Web Development",
    link: "https://www.udemy.com/course/web-development-html5-css3-php-oop-and-mysql-database/",
    linkText: "Course link",
    Icon: BiBook,
    subtitle: "Udemy",
  },
  {
    title: "Introduction to Python",
    link: "https://www.facebook.com/topreviewcenter",
    linkText: "TOP ECE Review Center",
    Icon: BiMapPin,
    subtitle: "Baguio City",
  },
  {
    title: "Java Programming Language",
    link: "https://informatics.edu.ph/",
    linkText: "Informatics",
    Icon: BiMapPin,
    subtitle: "Baguio City",
  },
  {
    title: "C Programming Language",
    link: "https://informatics.edu.ph/",
    linkText: "Informatics",
    Icon: BiMapPin,
    subtitle: "Baguio City",
  },
  {
    title: "Mechanical Engineering",
    link: "https://www.slu.edu.ph/",
    linkText: "Saint Louis University",
    Icon: BiMapPin,
    subtitle: "Baguio City",
  },
];
