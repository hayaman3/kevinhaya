import React, { FunctionComponent } from "react";

export type MiddleLineProps = {
  //no props
};

const MiddleLine: FunctionComponent<MiddleLineProps> = ({}) => {
  return (
    <div>
      <span className="inline-block h-[13px] w-[13px] rounded-[50%] bg-[hsl(0,0%,46%)]" />
      <span className="block h-full w-px translate-x-1.5 translate-y-[-7px] bg-[hsl(0,0%,46%)]" />
    </div>
  );
};

export default MiddleLine;
