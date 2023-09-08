import React, { FunctionComponent } from "react";
import Section from "@/_components/Section";
import Title from "@/_components/Title";
import Subtitle from "@/_components/Subtitle";
import ContactMain from "./ContactMain";

export type ContactProps = {
  //no props
};

const Contact: FunctionComponent<ContactProps> = ({}) => {
  return (
    <Section id="contact">
      <Title>Contacts</Title>
      <Subtitle>Get in touch</Subtitle>
      <ContactMain />
    </Section>
  );
};

export default Contact;
