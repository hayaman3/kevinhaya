import React, { FunctionComponent } from "react";
import { SendSVG } from "@/_components/SVG";

export type ButtonProps = {
  //no props
};

const Button: FunctionComponent<ButtonProps> = ({}) => {
  return (
    <button
      type="submit"
      className="inline-flex items-center rounded-2xl bg-title px-8 py-5 font-medium text-white hover:bg-black md:px-7 md:py-4"
    >
      Send Message
      <SendSVG />
    </button>
  );
};

export default Button;
