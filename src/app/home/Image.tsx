import React, { FunctionComponent } from "react";
import Image from "next/image";

const ProfileImage: FunctionComponent = () => {
  return (
    <div className="sm:justify-self initial relative order-1 h-[300px] w-[300px] animate-border justify-self-center overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-[inset_0_0_0_9px_rgb(255_255_255/_30%)] md:h-[250px] md:w-[250px] md:shadow-[inset_0_0_0_8px_rgb(255_255_255/_30%)] sm:order-[initial] sm:h-[200px] sm:w-[200px] sm:shadow-[inset_0_0_0_6px_rgb(255_255_255/_30%)]">
      <Image
        src="/./images/kevin.png"
        alt="cover image"
        priority
        fill
        sizes="(max-width: 768px) 200px, (max-width: 992px) 250px, 300px"
        placeholder="blur"
        blurDataURL={"/./images/kevin.png"}
        className="-z-10 object-cover grayscale-[60%]"
      />
    </div>
  );
};

export default ProfileImage;
