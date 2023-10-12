import React, { FunctionComponent } from "react";
import { TportfolioData } from "@/data/PortfolioData";
import Image from "next/image";

export type ImageComponentProps = {
  props: TportfolioData;
};

const ImageComponent: FunctionComponent<ImageComponentProps> = ({ props }) => {
  const { src, title } = props;
  return <Image src={src} alt={title} layout="fill" objectFit="cover" />;
};

export default ImageComponent;
