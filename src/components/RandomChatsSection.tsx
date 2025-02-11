"use client";

import Image from "next/image";
import React from "react";

const RandomChatsSection = () => {
  return (
    <section className="flex relative flex-col items-start pt-20 pb-10 mt-8 max-w-[1400px] w-full px-0 md:px-10 m-auto max-md:max-w-full">
      {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/d0dfd29fa2b144da9ac1df062167f150/44cce1c6caf02d5706638bfadaa75f3d5a220bd93dd6ef6dc575e11babbb502c?placeholderIfAbsent=true"
        className="object-cover absolute inset-0 size-full"
        alt="Background pattern"
      /> */}
      <div className="relative self-center ml-6 w-full max-w-[970px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow mt-10 max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start text-3xl font-black tracking-tighter leading-none text-white">
                RANDOM CHATS.
              </h2>
              <p className="mt-12 text-base leading-5 text-stone-300 max-md:mt-10 max-md:max-w-full">
                Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac
                ullamcorper ac et facilisis. Id eleifend quis urna tellus tempor facilisis at semper
                ac. Interdum tortor ut ac ullamcorper ac et facilisis.Id eleifend quis
              </p>
            </div>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="/images/gamelist.png"
              width={320}
              height={135}
              className="object-contain grow w-full aspect-[2.36] max-md:mt-10 max-md:max-w-full"
              alt="Random chats illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomChatsSection;
