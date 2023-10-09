import React, { FunctionComponent } from "react";
import Image from "next/image";

export type ImageComponentProps = {
  title: string;
};

const ImageComponent: FunctionComponent<ImageComponentProps> = ({ title }) => {
  return (
    <>
      {title === "grey" ? (
        <Image
          src="/./images/portfolio/grey.jpg"
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <Image
          src="/./images/portfolio/red.jpg"
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      )}
    </>
  );
};

export default ImageComponent;