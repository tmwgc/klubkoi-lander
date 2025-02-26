"use client";

import React from "react";
import VideoSwiper from "./VideoSwiper";

const TrailerSneakpeaks: React.FC = () => {
  return (
    <section className="max-w-[1600px] w-full m-auto max-md:max-w-full">
      <div className=" w-full pt-20 pb-20">
        <div className="flex flex-col w-full text-center mb-20 max-md:mt-10 px-5 max-md:max-w-full">
          <h2 className="text-5xl font-black leading-10 text-white max-md:max-w-full max-md:text-3xl">
            CATCH <span className="gradient-text">SNEAKPEAKS</span>
            <br />
            INSIDE OF <span className="gradient-text">KOI</span>
          </h2>
          <p className="self-center mt-4 text-base font-medium leading-5 text-gray-100 w-[603px] max-md:max-w-full">
            Give yourself a breath-taking walkthrough into the koi world where anything is possible.
            These sneak peaks are from our current phase of development that offers you a glance of
            what&#39;s inside koi.
          </p>
        </div>
        <VideoSwiper />
      </div>
    </section>
  );
};

export default TrailerSneakpeaks;
