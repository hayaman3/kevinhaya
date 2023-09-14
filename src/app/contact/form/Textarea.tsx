import React, { FunctionComponent } from "react";
import { useField } from "formik";

export type TextareaProps = {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
};

const Textarea: FunctionComponent<TextareaProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        className="absolute left-5 top-[-1rem] z-10 bg-zinc-50 p-1 text-[0.8rem] md:text-[0.75rem]"
        htmlFor={props.id || props.name}
      >
        {meta.touched && meta.error ? (
          <span className="text-red-500">*{meta.error}</span>
        ) : (
          <span>{label}</span>
        )}
      </label>
      <textarea
        className="text-[hsl(0,0%,46%) absolute left-0 top-0 z-[1] h-full w-full resize-none rounded-xl border-2 border-solid border-[rgba(0,0,0,0.3)] bg-zinc-50 p-6"
        {...field}
        {...props}
      />
    </>
  );
};

export default Textarea;
