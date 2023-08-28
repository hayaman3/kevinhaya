import React, { FunctionComponent } from "react";
import Image from "next/image";

const ImageCard: FunctionComponent = () => {
  return (
    <div className="relative h-[350px] w-[350px] justify-self-center overflow-hidden rounded-3xl md:h-[220px]  md:w-[220px]">
      <Image
        src="/./images/kevin.png"
        alt="profile image"
        fill
        sizes="(max-width: 992px) 220px, 350px"
        className="-z-10 object-cover grayscale-[60%]"
      />
    </div>
  );
};

export default ImageCard;
