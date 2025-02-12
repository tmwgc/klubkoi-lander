import Image from "next/image";
import React from "react";

const InvestmentPromotion = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full max-md:text-center mt-[-30px] max-md:mt-0">
        <Image
          loading="lazy"
          src={"/images/coins.png"}
          alt=""
          width={320}
          height={320}
          className="object-contain self-center w-full aspect-[2.26] max-w-[500px]"
        />
      </div>
      <div className="flex flex-col m-auto max-w-[520px] w-full max-md:max-w-full">
        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-col  w-full">
            <div className="text-4xl max-md:text-3xl tracking-tighter leading-none text-white">
              Invest with us in
            </div>
            <div className="mt-1 text-4xl max-md:text-3xl font-bold leading-8 tracking-[4.56px]">
              <span className="gradient-text font-advent-pro">FUTURE OF VIRTUAL CASINOS</span>
            </div>
          </div>
        </div>
        <div className="mt-5 text-base font-medium tracking-tight text-white">
          Become an investor today and Gain high ROI with our Web3 centric, community run casino
          investment schemes and gain access to added advantages.
        </div>
        <button className="gap-1.5 self-center px-1.5 py-2.5 mt-11 max-w-full w-full text-base font-medium leading-none text-black rounded-sm shadow-xl btn-gradient min-h-[34px]">
          Apply to become an investor
        </button>
      </div>
    </div>
  );
};

export default InvestmentPromotion;
