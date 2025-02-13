import Image from "next/image";
import React from "react";

export const VisionCard: React.FC = () => {
  return (
    <article className="relative grow max-md:max-w-full">
      <header className="flex overflow-hidden relative flex-col px-16 pt-96 pb-2 max-w-full text-2xl font-medium text-white min-h-[439px] tracking-[3.96px] w-[431px] max-md:px-5 max-md:pt-24">
        <Image
          loading="lazy"
          src="/images/spiral.svg"
          className="object-cover absolute inset-0 size-full"
          alt="Vision background"
          fill
        />
        <h2>OUR VISION</h2>
      </header>
      <div className="flex flex-col items-start pl-16 max-md:pr-16 max-md:pl-5 max-md:pr-5 max-md:max-w-full">
        <h3 className="text-5xl font-semibold leading-10 text-white max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Shaping the
          <span className="gradient-text"> Future of Gambling </span>
          Together
        </h3>
        <p className="mt-9 text-base leading-5 text-stone-300 max-md:max-w-full">
          Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac
          ullamcorper ac et facilisis.
        </p>
      </div>
    </article>
  );
};
