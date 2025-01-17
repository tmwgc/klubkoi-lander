import * as React from "react";
import Image from "next/image";
import Header from "./Header";

const HeroSection: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col w-full min-h-[calc(100dvh-40px)] h-[calc(100dvh-40px)] max-md:max-w-full hero-bg">
      {/* <img
        loading="lazy"
        src="/hero.svg"
        alt=""
        className="object-cover absolute inset-0 w-full h-full"
        style={{ backgroundSize: "100% 100%" }}
      /> */}
      <Header />
      <div className="relative z-10 mt-0 mb-0 w-full max-w-full mt-5 md:mt-0 max-md:max-w-full px-10 md:px-20">
        <div className="flex max-md:flex-col-reverse">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full max-md:justify-center">
            <Image
              priority
              loading="eager"
              src="/images/hero1.png"
              alt="Gambling Experience"
              className="object-contain grow w-full md:w-[90%] aspect-[0.97] max-md:mt-0 max-md:max-w-full"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start w-[50%] md:w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col text-white mt-0 max-md:mt-0">
              <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start">
                <div className="text-4xl font-bold leading-10 tracking-[2.04px] max-md:text-3xl font-advent-pro text-center md:text-start">
                  EXPERIENCE THE
                  <br /> NEW AGE OF GAMBLING
                </div>
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
        </div>
        <div className="max-w-[260px] w-full flex flex-col items-center mt-5 flex md:hidden scroll-absolute">
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
  );
};

export default HeroSection;
