import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.scss";

// const adventPro = Advent_Pro({
//   variable: "--font-advent-pro",
//   subsets: ["latin"],
// });

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koi",
  description:
    "Experience the new age of gambling with KlubKoi, you are assured to experience gambling in a new dimension as never before",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
