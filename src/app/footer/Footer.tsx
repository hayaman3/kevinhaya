import React, { FunctionComponent } from "react";
import LinksContainer from "./_components/LinksContainer";
import FooterPageLinks from "./FooterPageLinks";
import FooterSocialsLinks from "./FooterSocialsLinks";
import Copywrite from "./Copywrite";

export type FooterProps = {
  //no props
};

const Footer: FunctionComponent<FooterProps> = ({}) => {
  return (
    <footer className="mt-24 border-t border-solid border-t-[rgba(0,0,0,0.1)] bg-white pb-10 pt-14 sm:mt-8">
      <LinksContainer>
        <FooterPageLinks />
        <FooterSocialsLinks />
      </LinksContainer>

      <hr className="mx-auto mb-8 h-px w-[90%] bg-gray-200" />

      <Copywrite />
    </footer>
  );
};

export default Footer;
