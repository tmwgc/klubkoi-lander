import * as React from "react";
import { SocialIconProps } from "./types";

const socialIcons: SocialIconProps[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/d0dfd29fa2b144da9ac1df062167f150/65c326ade0092e95c6ad35c62cdbf200fce5631a5f0e1d46b38d9b3487f8e7c8?apiKey=d0dfd29fa2b144da9ac1df062167f150&",
    alt: "Social media icon",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/d0dfd29fa2b144da9ac1df062167f150/4c32942f41210cc6f2772786bba5adfd6197b9dcf767f92fd405518b8e6b9729?apiKey=d0dfd29fa2b144da9ac1df062167f150&",
    alt: "Social media icon",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/d0dfd29fa2b144da9ac1df062167f150/4709bf3d4bf3405664a7306ecbb7d6735fd6b7d097867f99a39ddb9d35f15079?apiKey=d0dfd29fa2b144da9ac1df062167f150&",
    alt: "Social media icon",
  },
];

export const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-2.5 items-center">
      {socialIcons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      ))}
    </div>
  );
};
