"use client";

import React from "react";
import Marquee from "../Footer/Marquee";

const items = [
  { icon: "/icons/star.svg", text: "WE’RE MAKING THE HEADLINES" },
  { icon: "/icons/star.svg", text: "KLUBKOI ON AIR" },
  { icon: "/icons/star.svg", text: "wE’RE ON POPULAR MAGAZINES" },
];

export const PurchaseAndStake: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full px-10">
      <div className="px-10 max-md:px-0">
        <div className="px-16 py-16 w-full gradient-bg max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[58%] max-md:ml-0 max-md:w-full">
              <h1 className="text-3xl font-bold text-black max-md:mt-10 max-md:max-w-full">
                Now you can purchase and Stake Koi from 5+ Global Exchanges
              </h1>
            </div>
            <div className="ml-5 w-[42%] max-md:ml-0 max-md:w-full flex flex-col justify-center">
              <button
                className="gap-2.5 self-stretch px-2.5 py-5 my-auto w-full text-base font-semibold leading-none text-white bg-black rounded-sm shadow-2xl min-h-[60px] max-md:mt-10"
                aria-label="Purchase Token Now"
              >
                Purchase Token Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="flex gap-5 blur-bg py-2 px-2 transform rotate-[-2deg] origin-bottom-left max-md:flex-wrap"
        // style={{ transform: "rotate(-2deg)" }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mx-3 md:mx-5">
            <div className="w-6 aspect-square	 relative">
              <Image src={item.icon} alt={item.text} fill objectFit="contain" />
            </div>
            <span className="font-bold uppercase text-md md:text-xl">{item.text}</span>
          </div>
        ))}
      </div> */}
      <div className="marquee footer-gradient-bg py-2 md:py-3 transform rotate-[-2deg] origin-bottom-left">
        <Marquee items={items} />
      </div>
    </section>
  );
};

export default PurchaseAndStake;
