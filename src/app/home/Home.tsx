import React, { FunctionComponent } from "react";
import Social from "./Social";
import ProfileImage from "./Image";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

interface StyleProps {
  sectionClass: string;
}

const Home: FunctionComponent<StyleProps> = ({ sectionClass }) => {
  return (
    <section
      className={`${sectionClass} flex content-center justify-center`}
      id="home"
    >
      <div
        className="mx-auto 
        max-w-[968px] 
        gap-y-28
        md:mx-6
        md:grid
        md:gap-6 
        xs:mx-4
      "
      >
        <div className="grid grid-cols-[116px_repeat(2,1fr)] items-center gap-6 gap-x-8 pt-[5.5rem] sm:grid-cols-[0.5fr_3fr] sm:pt-14 md:grid-cols-[100px_repeat(2,1fr)] md:gap-x-5">
          <Social />
          {/* change home image */}
          <div className="relative order-1 h-[300px] w-[300px] justify-self-center bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_9px_rgb(255_255_255/_30%)]">
            <ProfileImage />
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
