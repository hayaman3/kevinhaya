import React, { FunctionComponent } from "react";
import Image from "next/image";

const AboutImage: FunctionComponent = () => {
  return (
    <div className="relative h-[300px] w-[300px] justify-self-center overflow-hidden rounded-3xl md:h-[220px]  md:w-[220px]">
      <Image
        src="/./images/kevin.png"
        alt="about image"
        fill
        sizes="(max-width: 992px) 220px, 300px"
        className="-z-10 object-cover grayscale-[60%]"
      />
    </div>
  );
};

export default AboutImage;
