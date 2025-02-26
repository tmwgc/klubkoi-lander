import * as React from "react";
import Image from "next/image";

import NavLink from "./NavLink";
import Link from "next/link";

const Header: React.FC<{ className?: string }> = ({ className = "header-bg" }) => {
  const navLinks = [
    { name: "Gameplay", link: "/#gameplay" },
    { name: "Tokenomics", link: "/#tokenomics" },
    { name: "Early Access", link: "/#early-access" },
  ];

  return (
    // <header className="flex justify-between items-center w-full relative px-5 py-9 pb-7 md:py-0 md:pb-0 md:px-20 header-bg bg-black-bg md:bg-transparent relative mb-5 md:mb-0">
    <header
      className={`flex justify-between items-center w-full relative px-5 py-9 pb-7 md:py-12 md:pb-3 md:px-20 bg-black-bg md:bg-transparent relative mb-5 md:mb-0 ${className}`}
    >
      <div className="max-w-[1600px] m-auto flex justify-between items-center w-full">
        <div className="flex items-center logo hidden md:flex">
          <Link href="/">
            <Image
              priority
              loading="eager"
              src="/logo.png"
              alt="Logo"
              width={155}
              height={55}
              objectFit={"contain"}
              className="h-[75px] w-auto"
            />
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex item-center gap-3 cursor-pointer">
            <Link href="/">
              <Image
                src="/icons/home.svg"
                alt="home"
                width={24}
                height={24}
                objectFit={"contain"}
                className="w-[24px] aspect-square max-md:w-[18px]"
                // className="h-10"
              />
            </Link>
            <Link href="/" className="font-medium text-md block md:hidden">
              Home
            </Link>
          </div>
          <div className="flex gap-10 items-center hidden md:flex">
            {navLinks.map((link, idx) => (
              <NavLink key={idx} text={link.name} link={link.link} />
            ))}
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <Link href="/">
            <Image
              priority
              loading="eager"
              src="/logo.png"
              alt="Logo"
              width={155}
              height={55}
              objectFit={"contain"}
              className="w-[120px] md:w-[150px]"
            />
          </Link>
        </div>
        <div className="flex gap-8 items-center">
          <Link
            href="/pdf/whitepaper.pdf"
            download="whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-transparent px-4 md:px-10 py-1 flex items-center gap-3 download-btn">
              <Image
                src="/icons/download-circle.svg"
                alt="download whitepaper"
                width={22}
                height={22}
                className="w-[22px] aspect-square max-md:w-[18px]"
              />
              <span className="text-left font-medium text-sm">
                Download
                <br />
                Whitepaper
              </span>
            </button>
          </Link>
        </div>
        <div className="flex gap-2 max-md:gap-0 items-center justify-evenly absolute top-[100%] left-10 right-10 -translate-y-1/2 border border-[#7E7070] bg-black-bg rounded-3xl flex md:hidden px-2">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.link}
              className="text-sm font-medium text-white text-center p-3 text-nowrap"
            >
              {link.name}
            </Link>
          ))}
          {/* <Image src="/icons/menu.svg" alt="meny" width={24} height={24} /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
