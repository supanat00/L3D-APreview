import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "../components/SmoothScroll";

export const metadata: Metadata = {
  title: "BLKGEM",
  description: "BLKGEM - The art of entertainment academy - AWESOME SUMMER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
