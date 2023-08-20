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
      // className="flex content-center justify-center px-0 pb-8 pt-24 sm:px-0 sm:pb-16 sm:pt-8"
      id="home"
    >
      <div className="mx-auto grid max-w-[968px] gap-6 gap-y-28 md:mx-6 xs:mx-4">
        <div className="grid grid-cols-[116px_repeat(2,1fr)] items-center gap-6 gap-x-8 pt-[5.5rem] sm:grid-cols-[0.5fr_3fr] sm:pt-14 md:grid-cols-[100px_repeat(2,1fr)] md:gap-x-5">
          <Social />
          <ProfileImage />
          <Data />
        </div>
        {/* <ScrollDown /> */}
      </div>
    </section>
  );
};

export default Home;
