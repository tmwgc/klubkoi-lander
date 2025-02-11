"use client";

import React from "react";

const TrailerSneakpeaks: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full pt-20 pb-20">
      <div className="flex flex-col w-full text-center max-md:mt-10 max-md:max-w-full">
        <h2 className="text-5xl font-black leading-10 text-white max-md:max-w-full">
          WATCH <span className="text-[#CFFF55]">SNEAKPEAKS</span>
          <br />
          FROM THE <span className="text-[#CFFF55]">TRAILER</span>
        </h2>
        <p className="self-center mt-4 text-base font-medium leading-5 text-gray-100 w-[603px] max-md:max-w-full">
          We&#39;re selecting handpicked first 100 player to experience our working product and
          share it for the community. Signup now and gain added early bird benefits as a loyalty
          bonus in return. Remember to paste the correct testnet Solana address. You&#39;ll be
          issued with Koi Tokens for exploring features in the platform
        </p>
      </div>
    </section>
  );
};

export default TrailerSneakpeaks;
