import React from "react";
import BasicMetrics from "./BasicMetrics";

const Tokenomics = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full py-20 px-5">
      <div className="flex flex-col text-center max-w-[718px] w-full m-auto max-md:mt-10">
        <h2 className="text-6xl font-black text-lime-300 leading-[50px] tracking-[6.72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          THE KLUBKOI <span className="text-white">TOKENOMICS</span>
        </h2>
        <p className="self-center mt-5 text-base leading-5 text-stone-300 w-[482px] max-md:max-w-full">
          Purchase Koi Token from Renown Exchanges Now. Purchase Koi Token from Renown Exchanges
          Now.Purchase Koi Token from Renown Exchanges Now.
        </p>
      </div>
      <BasicMetrics />
    </section>
  );
};

export default Tokenomics;
