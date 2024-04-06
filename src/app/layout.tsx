import type { Metadata } from "next";
import "./globals.css";

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
      <body >{children}</body>
    </html>
  );
}
