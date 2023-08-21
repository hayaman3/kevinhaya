import "./globals.css";
import type { Metadata } from "next";
import classNames from "classnames";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "<Kevin/>",
  description: "Kevin Larry Haya Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={classNames(
          "bg-zinc-50",
          "text-base",
          "text-[#757575]",
          "sm:mb-12",
          poppins.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
