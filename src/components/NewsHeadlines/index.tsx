import Image from "next/image";
import React from "react";

export const NewsHeadlines = () => {
  const newsLogos = [
    {
      src: "/news/news1.svg",
      alt: "News logo 1",
    },
    {
      src: "/news/news1.svg",
      alt: "News logo 1",
    },
    {
      src: "/news/news1.svg",
      alt: "News logo 1",
    },
    {
      src: "/news/news1.svg",
      alt: "News logo 1",
    },
    {
      src: "/news/news1.svg",
      alt: "News logo 1",
    },
    {
      src: "/news/news1.svg",
      alt: "News logo 1",
    },
  ];

  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full px-5 my-20">
      <div className="flex flex-col pb-36 max-md:pb-24">
        <div className="flex z-10 flex-wrap gap-10 mt-0 mb-20 w-full text-white px-10 max-md:max-w-full">
          <h1 className="grow shrink text-5xl font-black leading-10 w-[415px] max-md:max-w-full max-md:text-4xl">
            WE&#39;RE <span className="gradient-text">MAKING</span>
            <br />
            HEADLINES ON <span className="gradient-text">NEWS</span>
          </h1>
          <p className="grow shrink self-start text-xl font-semibold text-right max-md:text-start rotate-[1.7484555314694994e-7rad] w-[297px]">
            Know the team behind our extraordinary platform. We assembled the best minds to give
            life to Klubkoi
          </p>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2">
          {newsLogos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center px-12 py-20 news-card">
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
