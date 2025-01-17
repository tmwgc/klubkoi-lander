import type { Metadata } from "next";
import { Advent_Pro, Albert_Sans } from "next/font/google";
import "./globals.css";

const adventPro = Advent_Pro({
  variable: "--font-advent-pro",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koi",
  description: "Experience the NEW AGE OF GAMBLING",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${adventPro.variable} ${albertSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
