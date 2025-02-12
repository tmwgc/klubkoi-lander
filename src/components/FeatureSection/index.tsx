"use client";

import React from "react";
import { FeatureCard } from "./FeatureCard";

const featuresData = [
  {
    icon: "/features/feature1.svg",
    title: "Immersive Experience",
    description:
      "Klub Koi offers users an immersive experience by combining innovative virtual environments with engaging gameplay and traditional gambling. Players are transported into a dynamic, interactive world where they can wager, compete, and customize their journey, blending entertainment with personalization like never before.",
  },
  {
    icon: "/features/feature2.svg",
    title: "Community Ownership",
    description:
      "Klub Koi evolves online wagering by offering a platform where the community owns a majority stake in its success. Through profit-sharing across all revenue streams, dedicated participants directly benefit from the platform's growth, ensuring alignment between player engagement and financial rewards.",
  },
  {
    icon: "/features/feature3.svg",
    title: "Powered By Web3",
    description:
      "Klub Koi leverages the power of Web3 technology to deliver a decentralized, transparent, and secure gaming ecosystem. By integrating blockchain for profit-sharing, in-game assets, and community-driven governance, Klub Koi empowers players with true ownership and control over their digital experience.",
  },
  {
    icon: "/features/feature4.svg",
    title: "Globally Connected",
    description:
      "Klub Koi is a globally connected platform that brings players from around the world into a shared virtual casino and gaming experience. By offering universal access to immersive gameplay, live betting, and community-driven rewards, Klub Koi fosters an inclusive and borderless entertainment ecosystem.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full pt-12">
      <div className="flex flex-col items-center px-5 feature-bg">
        <header className="max-w-full text-center w-[924px]">
          <h1 className="text-5xl font-black text-lime-300 uppercase max-md:max-w-full max-md:text-4xl">
            WE STAND OUT <span className="text-white">FROM THE REST</span>
          </h1>
          <p className="mt-4 text-lg font-medium tracking-wide leading-6 text-neutral-200 max-md:max-w-full">
            Since 2018 the main goal of Bitlocus has been to remove the complexity of the crypto
            space
            <br />
            for fiat users. Our products between fiat and crypto.
          </p>
        </header>
        <div className="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-2 gap-20 self-start px-5 py-20 max-md:max-w-full max-md:grid-cols-1 max-md:px-0">
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* <div className="mt-10 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[46%] max-md:ml-0 max-md:w-full">
             
            </div>
            <div className="ml-5 w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between items-start max-md:mt-10 max-md:max-w-full">
                <div className="shrink-0 w-0.5 border-solid border-[3px] border-emerald-50 border-opacity-20 h-[215px]" />
                
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
