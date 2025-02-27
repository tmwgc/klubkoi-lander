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

const title = "Klubkoi | Experience Blockchain Gambling";
const description =
  "The revolutionary blockchain casino that's changing the multitude of gambling madness. Walkthrough the immersive three dimensional gaming experience, secure transactions, and a transparent, community-driven governance.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: ["/thumbnail.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${albertSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
