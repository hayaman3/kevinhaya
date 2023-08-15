import React, { FunctionComponent } from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home: FunctionComponent = () => {
  return (
    <section className="flex content-center justify-center" id="home">
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
          <div className="home-image" />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
