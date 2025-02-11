import Image from "next/image";
import React from "react";

const logos = [
  "/footerlogos/trustpilot.png",
  "/footerlogos/visa.png",
  "/footerlogos/mastercard.png",
  "/footerlogos/gcb.png",
  "/footerlogos/paypal.svg",
];

const FooterLogos = () => {
  return (
    <section className="flex flex-col justify-center self-stretch my-auto w-[45%]">
      <div className="flex flex-wrap gap-9 items-center w-full px-20">
        {logos.map((logo, index) => (
          <Image
            key={index}
            loading="lazy"
            src={logo}
            alt={`Gaming License Logo ${index + 1}`}
            width={122}
            height={41}
            className="object-contain shrink-0 self-stretch my-auto w-auto h-[50px]"
          />
        ))}
      </div>
    </section>
  );
};

export default FooterLogos;
