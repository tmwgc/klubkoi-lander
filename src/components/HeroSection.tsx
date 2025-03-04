"use client";

import * as React from "react";
import Image from "next/image";
import Header from "./Header";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <div className="max-w-[1600px] m-auto">
      <div className="flex overflow-hidden relative flex-col w-full max-md:max-w-full hero-bg">
        {/* <div className="flex overflow-hidden relative flex-col w-full min-h-[calc(100dvh-40px)] h-[calc(100dvh-40px)] max-md:max-w-full hero-bg"> */}
        {/* <img
        loading="lazy"
        src="/hero.svg"
        alt=""
        className="object-cover absolute inset-0 w-full h-full"
        style={{ backgroundSize: "100% 100%" }}
      /> */}
        <Header />
        <div className="relative z-10 mt-0 mb-0 w-full max-w-full mt-5 md:mt-0 max-md:max-w-full px-10 md:px-20">
          {/* <div className="flex max-md:flex-col-reverse">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full max-md:justify-center">
              <Image
                priority
                loading="eager"
                src="/images/hero-avatar.png"
                alt="Gambling Experience"
                className="object-contain grow w-full md:w-[90%] aspect-[0.97] max-md:mt-0 max-md:max-w-full"
                width={600}
                height={600}
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start w-[50%] md:w-[45%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col text-white mt-0 max-md:mt-0">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start">
                  <h1 className="text-4xl md:text-[40px] font-bold leading-10 tracking-[2.04px] max-md:text-3xl font-advent-pro text-center md:text-start">
                    EXPERIENCE THE
                    <br /> NEW AGE OF GAMBLING
                  </h1>
                  <div className="mt-3 text-base tracking-wider max-w-[100%] md:max-w-[70%] ">
                    With KlubKoi, you are assured to experience gambling in a new dimension as never
                    before
                  </div>
                  <button className="px-6 py-2 max-w-[260px] w-full uppercase text-md font-bold font-advent-pro primary-btn mt-8">
                    LAUNCH CASINO
                  </button>
                  <div className="max-w-[260px] w-full flex flex-col items-center mt-5 hidden md:flex">
                    <p className="font-advent-pro uppercase text-xl font-bold mb-2">Scroll down</p>
                    <Image
                      loading="eager"
                      src="/icons/scroll-down.png"
                      alt=""
                      width={40}
                      height={32}
                      className="w-[40px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col pt-12">
            <div className="flex items-center justify-between gap-8 w-[80%] max-md:w-[100%] m-auto max-md:flex-col max-md:justify-center">
              <h1 className="text-5xl font-black text-white max-md:max-w-full max-md:text-4xl max-md:text-center">
                <span className="gradient-text">EXPERIENCE</span> THE ERA OF
                <span className="gradient-text"> BLOCKCHAIN</span> GAMBLING
              </h1>
              <button
                onClick={() => router.push("/")}
                className="px-6 py-2 max-w-[260px] w-full uppercase text-md font-bold primary-btn"
              >
                LAUNCH CASINO
              </button>
            </div>
            <div className="max-w-[80%] w-full max-md:max-w-[100%] m-auto">
              <Image
                priority
                loading="eager"
                src="/images/hero-avatar.png"
                alt="Gambling Experience"
                className="object-contain grow w-full md:w-[90%] max-md:mt-0 max-md:max-w-full max-md:hidden"
                width={600}
                height={600}
              />
              <Image
                priority
                loading="eager"
                src="/images/hero-avatar-mobile.png"
                alt="Gambling Experience"
                className="object-contain grow w-full md:w-[90%] max-md:mt-0 max-md:max-w-full hidden max-md:block"
                width={600}
                height={600}
              />
            </div>
          </div>
          {/* <div className="max-w-[260px] w-full flex flex-col items-center mt-5 flex md:hidden scroll-absolute">
            <p className="uppercase text-xl font-bold mb-2">Scroll down</p>
            <Image
              loading="eager"
              src="/icons/scroll-down.png"
              alt=""
              width={40}
              height={32}
              className="w-[40px]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
