import React, { FunctionComponent } from "react";
import {
  TbMailUp,
  TbLoader2,
  TbCircleCheckFilled,
  TbMailExclamation,
} from "react-icons/tb";

type MessageStatus = "standby" | "loading" | "success" | "error";

export type ButtonProps = {
  messageStatus: MessageStatus;
};

const Icon: Record<MessageStatus, React.JSX.Element> = {
  standby: <TbMailUp className="ml-2 text-[1.4rem]" />,
  loading: <TbLoader2 className="ml-2 animate-spin text-[1.4rem]" />,
  success: <TbCircleCheckFilled className="ml-2 text-[1.4rem]" />,
  error: <TbMailExclamation className="ml-2 text-[1.4rem]" />,
};

const messageText: Record<MessageStatus, string> = {
  standby: "Send Message",
  loading: "Sending",
  success: "Message Sent",
  error: "Message Failed",
};

const Button: FunctionComponent<ButtonProps> = ({ messageStatus }) => {
  return (
    <button
      type="submit"
      disabled={messageStatus === "loading"}
      className={`inline-flex w-[212px] items-center justify-center rounded-2xl bg-title py-5 font-medium text-white hover:bg-black md:w-[205px] md:py-4 ${
        messageStatus === "loading" ? "cursor-not-allowed opacity-70" : ""
      }`}
    >
      <span>{messageText[messageStatus]}</span>
      <span>{Icon[messageStatus]}</span>
    </button>
  );
};

export default Button;
