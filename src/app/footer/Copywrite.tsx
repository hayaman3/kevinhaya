import React, { FunctionComponent } from "react";

export type CopywriteProps = {
  //no props
};

const Copywrite: FunctionComponent<CopywriteProps> = ({}) => {
  return (
    <div className="text-center text-sm text-title">
      &#169; Kevin Larry Haya. All rights reserved
    </div>
  );
};

export default Copywrite;
