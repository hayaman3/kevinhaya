import React, { FunctionComponent } from "react";
import Image from "next/image";

interface Image {
  // no props
}

const imageStyle = {
  filter: "grayscale(60%)",
};

const ProfileImage: FunctionComponent = () => {
  return (
    <Image
      src="/./images/kevin.png"
      alt="logo"
      priority={true}
      // width={300}
      // height={300}
      fill={true}
      objectFit="contain"
      style={imageStyle}
    />
  );
};

export default ProfileImage;
