"use client";

import React from "react";
import { ExchangeHeading } from "./ExchangeHeading";
import { ExchangeLogos } from "./ExchangeLogos";

export const ExchangeList = () => {
  return (
    <section className="flex flex-col justify-between self-center my-20 max-w-[1600px] px-5 w-full m-auto max-md:max-w-full">
      <ExchangeHeading />
      <ExchangeLogos />
    </section>
  );
};

export default ExchangeList;
