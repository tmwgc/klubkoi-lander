import React from "react";

export const ExchangeHeading = () => {
  return (
    <header className="flex flex-col items-center justify-center max-w-full text-center w-[674px] mb-20 m-auto">
      <h1 className="text-5xl font-black text-center text-white uppercase leading-[52px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        WHERE TO <span className="gradient-text">TRADE KOI</span>
      </h1>
      <p className="mt-2.5 text-base leading-5 text-stone-300 max-md:max-w-full">
        Purchase Koi Token from Renown Exchanges. Koi is consistently being listed amongst the top
        crypto exchanges around the world
      </p>
    </header>
  );
};
