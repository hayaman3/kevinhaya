import React, { FunctionComponent } from "react";
import Section from "@/_components/Section";
import Title from "@/_components/Title";
import Subtitle from "@/_components/Subtitle";
import Main from "./ContactMain";
import ContactLinks from "./Links";
import ContactForm from "./Form";

export type ContactProps = {
  //no props
};

const Contact: FunctionComponent<ContactProps> = ({}) => {
  return (
    <Section id="contact">
      <Title>Contacts</Title>
      <Subtitle>Get in touch</Subtitle>
      <Main>
        <ContactLinks />
        <ContactForm />
      </Main>
    </Section>
  );
};

export default Contact;
