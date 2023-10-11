import React, { FunctionComponent } from "react";
import { TcontactData } from "@/data/ContactData";
import { BiRightArrowAlt } from "react-icons/bi";

export type ContactCardsProps = {
  prop: TcontactData;
};

const ContactCards: FunctionComponent<ContactCardsProps> = ({ prop }) => {
  const { Icon, title, subtitle, link, linkText } = prop;
  return (
    <div className="flex flex-col items-center rounded-xl border border-solid border-[rgba(0,0,0,0.1)] bg-white p-4  ">
      <Icon className="text-[1.8rem] text-[hsl(0,0%,20%)]" />
      <h3 className="mt-1 text-sm font-medium">{title}</h3>
      <span className="mb-3 block text-sm">{subtitle}</span>
      <a
        href={link}
        className=" flex items-center justify-center text-sm duration-300 ease-in hover:translate-x-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText}
        <BiRightArrowAlt className="text-base" />
      </a>
    </div>
  );
};

export default ContactCards;
