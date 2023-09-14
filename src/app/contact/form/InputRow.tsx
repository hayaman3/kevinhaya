import React, { FunctionComponent, ReactNode } from "react";

export type InputRowProps = {
  children: ReactNode;
  optionalClass?: string;
};

const InputRow: FunctionComponent<InputRowProps> = ({
  children,
  optionalClass,
}) => {
  return (
    <div className={`relative h-16 w-full ${optionalClass}`}>{children}</div>
  );
};

export default InputRow;
