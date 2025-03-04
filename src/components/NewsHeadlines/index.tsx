import { headlinesLogo } from "@/config";
import Image from "next/image";
import React from "react";

export const NewsHeadlines = () => {

  return (
    <section className="max-w-[1600px] w-full m-auto max-md:max-w-full px-5 my-20">
      <div className="flex flex-col max-md:pb-24">
        <div className="flex z-10 flex-wrap gap-10 mt-0 mb-20 w-full text-white px-10 max-md:max-w-full">
          <h1 className="grow shrink text-5xl font-black leading-10 w-[415px] max-md:max-w-full max-md:text-4xl">
            <span className="gradient-text">KOI</span> IS{" "}
            <span className="gradient-text">MAKING</span>
            <br />
            HEADLINES
          </h1>
          <p className="grow shrink self-start text-xl font-semibold text-right max-md:text-start rotate-[1.7484555314694994e-7rad] w-[297px]">
            Koi is gaining serious media attention as to proudly say that we&#39;re the first
            virtual casino to be designed in a 3D aspect.
          </p>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-2">
          {headlinesLogo.map((logo, index) => (
            <div key={index} className="flex flex-col items-center px-12 py-20 news-card max-md:px-3 max-md:py-10">
              <Image
                loading="lazy"
                src={logo.src}
                alt={logo.alt}
                width={305}
                height={55}
                className="object-contain max-w-full h-[55px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
