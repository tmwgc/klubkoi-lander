import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface NavItemProps {
  icon: string;
  text: string;
  alt: string;
  link?: string;
  showOnMobile?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ icon, text, alt, showOnMobile, link }) => {
  return (
    <Link href={link ? link : "/"}>
      <div className={`flex gap-1.5 items-center my-auto cursour-pointer `}>
        <Image
          loading="lazy"
          src={icon}
          alt={alt}
          className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          width={14}
          height={14}
        />
        <div className={`self-stretch my-auto ${showOnMobile ? "hidden md:block" : ""}`}>
          {text}
        </div>
      </div>
    </Link>
  );
};
