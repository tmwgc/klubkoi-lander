import * as React from "react";
import Image from "next/image";
import Header from "./Header";

const HeroSection: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col px-20 pt-14 w-full min-h-[calc(100vh-40px)] h-[calc(100vh-40px)] max-md:px-5 max-md:max-w-full hero-bg">
      {/* <img
        loading="lazy"
        src="/hero.svg"
        alt=""
        className="object-cover absolute inset-0 w-full h-full"
        style={{ backgroundSize: "100% 100%" }}
      /> */}
      <Header />
      <div className="relative z-10 mt-0 mb-0 w-full max-w-[1156px] max-md:max-w-full">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/d0dfd29fa2b144da9ac1df062167f150/855d8198c4fd09731f00a3c787eb56ef804ddb290edf06103906301afa1e1845?apiKey=d0dfd29fa2b144da9ac1df062167f150&"
              alt="Gambling Experience"
              className="object-contain grow w-full aspect-[0.97] max-md:mt-2.5 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col justify-center w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col text-white max-md:mt-10">
              <div className="flex flex-col justify-center">
                <div className="text-4xl font-bold leading-10 tracking-[2.04px] max-md:text-3xl font-advent-pro">
                  EXPERIENCE THE
                  <br />
                  NEW AGE OF GAMBLING
                </div>
                <div className="mt-3 text-base tracking-wider">
                  With KlubKoi, you are assured to experience
                  <br />
                  gambling in a new dimension as never before
                </div>
                <button className="px-2 font-advent-pro">Launch now</button>
                <div className="shrink-0 w-4 aspect-[0.76] relative">
                  {/* <Image
                    loading="lazy"
                    src="/images/hero1.png"
                    alt=""
                    fill
                    className="object-contain"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
