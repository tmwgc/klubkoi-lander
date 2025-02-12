"use client";

import Image from "next/image";
import React from "react";

const metrics = [
  {
    name: "Ticker",
    value: "AZERO",
  },
  {
    name: "Type",
    value: "Utility",
  },
  {
    name: "Circulating supply",
    value: "226,797,703",
  },
  {
    name: "Total supply",
    value: "330,381,616",
  },
  {
    name: "% Staked",
    value: "71%",
  },
  {
    name: "# of Wallets",
    value: "57,546",
  },
  {
    name: "Inflation",
    value: "30,000,000 / per year",
  },
  {
    name: "Volume",
    value: "$1,000,000",
  },
];

export default function BasicMetrics() {
  return (
    <section className="self-center mt-24 w-full max-w-[931px] m-auto max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-7 max-md:flex-col">
        <div className="w-6/12 my-auto max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src="/images/metrics.svg"
            width={400}
            height={400}
            className="object-contain self-stretch my-auto w-full aspect-square max-md:mt-10"
            alt="Basic metrics illustration"
          />
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-3 self-start items-center tracking-wider text-white">
              <h1 className="grow text-3xl font-light leading-none">Basic</h1>
              <span className="text-2xl font-bold leading-none">metrics</span>
            </div>
            <div className="flex shrink-0 mt-5 h-px bg-teal-400 w-[51px]" />
            <p className="mt-6 mb-6 text-sm font-light tracking-wide leading-5 text-slate-300 max-md:mr-2.5 max-md:max-w-full">
              AZERO is the native coin of the Aleph Zero platform and is used to secure the network
              through staking, pay for fees, and provide a basic unit of account between the
              multiple subnetworks created on the Aleph Zero platform.
            </p>
            <div className="flex flex-col gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b-[1px] border-[#FFFFFF12]"
                >
                  <p className="text-sm">{metric.name}</p>
                  <b className="text-sm">{metric.value}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
