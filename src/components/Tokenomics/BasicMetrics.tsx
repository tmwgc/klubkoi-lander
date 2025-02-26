"use client";

import React from "react";
import { PieChart } from "./PieChart";
import { tokenomics } from "@/config";

export default function BasicMetrics() {
  return (
    <section className="self-center w-full m-auto max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-20 justify-center max-md:flex-col">
        <div className="ml-5 w-auto max-w-[600px] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            {/* <div className="flex gap-3 self-start items-center tracking-wider text-white">
              <h1 className="grow text-3xl font-light leading-none">Basic</h1>
              <span className="text-2xl font-bold leading-none">metrics</span>
            </div> */}
            <h2 className="text-6xl font-black leading-[50px] tracking-[6.72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              <span className="gradient-text">
                KOI
                <br />
              </span>
              TOKENOMICS
            </h2>
            {/* <div className="flex shrink-0 mt-5 h-px bg-teal-400 w-[51px]" /> */}
            <p className="mt-6 mb-6 text-sm font-light tracking-wide leading-5 max-md:mr-2.5 max-md:max-w-full">
              KOI is the native coin of the Koiklub platform and is used to secure the network
              through staking, pay for fees, and share rewards amongst the community.
            </p>
            <div className="flex flex-col gap-6">
              {tokenomics.metrics.map((metric, index) => (
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
        <div className="max-w-[412px] relative w-[100%] my-auto max-md:ml-0 max-md:w-full">
          {/* <Image
            loading="lazy"
            src="/images/metrics.svg"
            width={400}
            height={400}
            className="object-contain self-stretch my-auto w-full aspect-square max-md:mt-10"
            alt="Basic metrics illustration"
          /> */}
          <div className="chart-bg"></div>
          <PieChart data={tokenomics.chartData} />
        </div>
      </div>
    </section>
  );
}
