import * as React from "react";
import { SocialIconProps } from "./types";
import Image from "next/image";
import Link from "next/link";

const socialIcons: SocialIconProps[] = [
  {
    src: "/icons/discord.svg",
    alt: "discord icon",
  },
  {
    src: "/icons/telegram.svg",
    alt: "telegram icon",
  },
  {
    src: "/icons/instagram.svg",
    alt: "instagram icon",
  },
];

export const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-2.5 items-center">
      {socialIcons.map((icon, index) => (
        <Link href="/" key={index}>
          <Image
            key={index}
            loading="lazy"
            src={icon.src}
            alt={icon.alt}
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            width={24}
            height={24}
          />
        </Link>
      ))}
    </div>
  );
};
