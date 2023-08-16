import React, { FunctionComponent } from "react";
import Image from "next/image";

interface Image {
  // no props
}

const ProfileImage: FunctionComponent = () => {
  return (
    <Image src="/./images/kevin.png" width={500} height={500} alt="logo" />
  );
};

export default ProfileImage;
