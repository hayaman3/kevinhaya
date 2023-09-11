import React, { FunctionComponent } from "react";

export type InputProps = {
  title: string;
  type: string;
  name: string;
  placeHolder: string;
};

const Input: FunctionComponent<InputProps> = ({
  title,
  type,
  name,
  placeHolder,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="absolute left-5 top-[-1rem] z-10 bg-zinc-50 p-1 text-[0.8rem] md:text-[0.75rem]"
      >
        {title}
      </label>
      <input
        type={type}
        name={name}
        className="text-[hsl(0,0%,46%) absolute left-0 top-0 z-[1] h-full w-full rounded-xl border-2 border-solid border-[rgba(0,0,0,0.3)] bg-zinc-50 p-6"
        placeholder={placeHolder}
      />
    </>
  );
};

export default Input;

{
  /* <div className="relative h-16 min-h-[11rem] w-full">
<label
  htmlFor="mesage"
  className="absolute left-5 top-[-1rem] z-10 bg-zinc-50 p-1 text-[0.8rem] md:text-[0.75rem]"
>
  Message
</label>
<textarea
  name="message"
  cols={30}
  rows={10}
  className="text-[hsl(0,0%,46%) absolute left-0 top-0 z-[1] h-full w-full resize-none rounded-xl border-2 border-solid border-[rgba(0,0,0,0.3)] bg-zinc-50 p-6"
  placeholder="Enter your message"
/>
</div> */
  // inputType: "input" | "textarea";
}
