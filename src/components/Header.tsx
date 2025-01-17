import * as React from "react";
import Image from "next/image";

import NavLink from "./NavLink";

const Header: React.FC = () => {
  const navLinks = ["Platform", "Community", "Resources"];

  return (
    <header className="flex justify-between items-center w-full">
      <div className="flex gap-10 items-center">
        <Image
          src="/icons/home.svg"
          alt="Logo"
          width={24}
          height={24}
          objectFit={"contain"}
          // className="h-10"
        />
        {navLinks.map((link, idx) => (
          <NavLink key={idx} text={link} />
        ))}
      </div>
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={155}
          height={55}
          objectFit={"contain"}
          // className="h-10"
        />
      </div>
      <div className="flex gap-8 items-center">
        <button className="bg-transparent px-10 py-2 flex items-center gap-3 download-btn">
          <Image
            src="/icons/download-circle.svg"
            alt="download whitepaper"
            width={24}
            height={24}
          />
          <strong className="text-left">
            Download
            <br />
            Whitepaper
          </strong>
        </button>
      </div>
    </header>
  );
};

export default Header;
