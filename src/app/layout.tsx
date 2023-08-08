import "./globals.css";
import type { Metadata } from "next";
import classNames from "classnames";

import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

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
      <body className={classNames("bg-zinc-50", poppins.className)}>
        {children}
      </body>
    </html>
  );
}

// body
// normal
//@max 992px
// font-family: var(--body-font);
// font-size: 1rem; @max1rem
// background-color: var(--body-color);
// color: var(--text-color);

// @768
// margin-top: 3rem; same with header-height
