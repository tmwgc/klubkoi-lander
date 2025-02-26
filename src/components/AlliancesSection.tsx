"use client";

import Image from "next/image";
import React from "react";

const AlliancesSection = () => {
  return (
    <section className="relative mt-12 max-md:mt-10 max-md:mr-0 max-w-[1600px] w-full m-auto max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col border-b-[1px] border-[var(--divider)]">
        <div className="w-[58%] relative max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src="/images/alliances.png"
            width={600}
            height={300}
            className="object-contain grow w-full aspect-[2.29] max-md:mt-10 max-md:max-w-full"
            alt="Alliances illustration"
          />
        </div>
        <div className="ml-5 w-[42%] flex max-md:ml-0 max-md:w-full">
          <article className="relative self-stretch my-auto max-md:mt-10 max-md:max-w-full max-md:px-5">
            <div className="text-3xl font-black">
              <span className="gradient-text">FORM ALLIANCES </span>
              AND PLAY VS TEAMS
            </div>
            <p className="mt-4 text-base leading-5 text-stone-300 max-md:max-w-full">
              Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac
              ullamcorper ac et facilisis. Id eleifend quis urna tellus tempor facilisis at semper
              ac. Interdum tortor ut ac ullamcorper ac et facilisis.Id eleifend quis
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AlliancesSection;
