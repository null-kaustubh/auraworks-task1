import type { Metadata } from "next";
import { Alef } from "next/font/google";
import "./globals.css";

const alef = Alef({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIOrtho Dashboard",
  description: "Dashboard page for auraworks task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alef.className} antialiased`}>{children}</body>
    </html>
  );
}
