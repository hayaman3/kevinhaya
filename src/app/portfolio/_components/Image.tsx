import React, { FunctionComponent } from "react";
import { TportfolioData } from "@/data/PortfolioData";
import Image from "next/image";

export type ImageComponentProps = {
  props: TportfolioData;
};

const ImageComponent: FunctionComponent<ImageComponentProps> = ({ props }) => {
  const { src, title } = props;
  return (
    // <>
    //   {title === "grey" ? (
    //     <Image
    //       src="/./images/portfolio/grey.jpg"
    //       alt="logo"
    //       layout="fill"
    //       objectFit="cover"
    //     />
    //   ) : (
    //     <Image
    //       src="/./images/portfolio/red.jpg"
    //       alt="logo"
    //       layout="fill"
    //       objectFit="cover"
    //     />
    //   )}
    // </>
    <Image src={src} alt={title} layout="fill" objectFit="cover" />
  );
};

export default ImageComponent;
