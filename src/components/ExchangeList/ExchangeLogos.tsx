import Image from "next/image";
import React from "react";

const exchangeLogos = [
  "/exchange-logos/sushiswap.svg",
  "/exchange-logos/uniswap.png",
  "/exchange-logos/pancake.svg",
  "/exchange-logos/jupiter.svg",
  "/exchange-logos/orca.png",
  "/exchange-logos/defillama.svg",
];

export const ExchangeLogos = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-wrap gap-10 items-center justify-center max-w-[900px] w-full m-auto max-md:max-w-full">
        {exchangeLogos.map((logo, index) => (
          <Image
            key={index}
            loading="lazy"
            src={logo}
            width={200}
            height={42}
            className="object-contain shrink-0 self-stretch my-auto h-[42px]"
            alt={`Exchange logo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
