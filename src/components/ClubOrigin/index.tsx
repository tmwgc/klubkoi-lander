import Image from "next/image";
import React from "react";

const ClubOrigin: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full">
      <div className="flex relative flex-col grow shrink-0 items-center px-20 pl-[calc(theme(spacing.20)+40px)] pt-36 pb-20 basis-0 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <Image
          loading="lazy"
          src="/images/origin-bg.png"
          className="object-cover h-[auto] absolute inset-0 size-full -z-1"
          alt=""
          fill
        />
        {/* <Image
          loading="lazy"
          src="/images/origin.png"
          width={950}
          height={390}
          className="object-contain relative w-full rounded-md aspect-[2.42] max-w-[950px] max-md:max-w-full"
          alt="Klub Koi main visual"
        /> */}
        <div className="flex relative flex-wrap gap-16 items-center mt-7 max-md:mr-2.5">
          <div className="flex flex-col self-stretch my-auto text-7xl min-w-[240px] max-w-[372px] max-md:w-full max-md:min-w-unset max-md:text-4xl">
            {/* <Image
              loading="lazy"
              src="/images/track.svg"
              width={340}
              height={51}
              className="object-contain self-center max-w-full aspect-[6.67] max-w-[340px] w-full max-w-auto"
              alt="Klub Koi logo"
            /> */}
            <div className="flex flex-col justify-between w-full text-5xl ">
              <div className="font-black text-white tracking-[-4%] max-md:text-3xl">PLANET</div>
              <Image
                priority
                loading="eager"
                src="/logo.png"
                alt="Logo"
                width={155}
                height={55}
                objectFit={"contain"}
                className="h-[170px] w-[auto] md:h-[120px]"
              />
            </div>
          </div>
          <div className="self-stretch my-auto text-base text-white max-w-[555px] w-full max-md:max-w-full">
            <p className="mb-6">
              Welcome to the new age of digital ownership! Koi is a blockchain enabled destination
              where Players become Bosses. Designed as a one stop shop for wagering enthusiasts,
              Koi’s casino floor meets skill-based competition, sports betting, and crypto futures
              trading. By delivering an interactive ecosystem, Koi has reimagined the gambling
              experience with enticing gameplay, strategic player advantages, and a community owned
              economy that rewards engagement.
            </p>
            <p>
              Welcome to the new age of digital ownership! Koi is a blockchain enabled destination
              where Players become Bosses. Designed as a one stop shop for wagering enthusiasts,
              Koi’s casino floor meets skill-based competition, sports betting, and crypto futures
              trading. By delivering an interactive ecosystem, Koi has reimagined the gambling
              experience with enticing gameplay, strategic player advantages, and a community owned
              economy that rewards engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubOrigin;
