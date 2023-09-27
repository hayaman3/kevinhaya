import { sendMail } from "../../service/mailService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  const response = await sendMail({
    subject: "From Portfolio Website",
    name,
    fromEmail: email,
    message,
  });
  return NextResponse.json({ message: response });
}
