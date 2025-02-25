import React from "react";
import BasicMetrics from "./BasicMetrics";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="max-w-[1400px] w-full m-auto max-md:max-w-full py-20 px-5">
      {/* <div className="flex flex-col text-center max-w-[718px] w-full m-auto max-md:mt-10">
        <h2 className="text-6xl font-black leading-[50px] tracking-[6.72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          <span className="gradient-text">KOI </span>TOKENOMICS
        </h2>
        <p className="self-center mt-5 text-base leading-5 text-stone-300 w-[482px] max-md:max-w-full">
          KOI is the native coin of the Koiklub platform and is used to secure the network through
          staking, pay for fees, and share rewards amongst the community.
        </p>
      </div> */}
      <BasicMetrics />
    </section>
  );
};

export default Tokenomics;
