import React, { FunctionComponent } from "react";
import { contactData, ContactDataObjectType } from "@/data/ContactData";
import ContactCard from "./ContactCard";

export type ContactLinksProps = {
  //no props
};

const ContactLinks: FunctionComponent<ContactLinksProps> = ({}) => {
  return (
    <div>
      <h3 className="mb-6 text-center text-xl font-medium md:text-base">
        Contact Links
      </h3>
      <div className="grid grid-cols-[300px] gap-y-4 sm:justify-center ss:grid-cols-[1fr]">
        {contactData.map((item, index) => (
          <ContactCard prop={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactLinks;
