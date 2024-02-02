import React, { FunctionComponent } from "react";
import Image from "next/image";

const AboutImage: FunctionComponent = () => {
  return (
    <Image
      alt="kevin graduation loopsie"
      // src="/./images/kevin-graduation-loopsie.jpg"
      src="/images/kevin-graduation-loopsie.jpg"
      width={0}
      height={0}
      sizes="100vw"
      className="h-auto w-[300px] rounded-xl md:w-[220px]"
    />
  );
};

export default AboutImage;
