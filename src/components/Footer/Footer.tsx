import * as React from "react";
import Image from "next/image";
import { SocialIcons } from "./SocialIcons";
import { FooterLinks } from "./FooterLinks";
import Marquee from "./Marquee";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-[#6F6F6F7A] h-[1px] mt-6 w-full block md:hidden" />
      <div className="flex flex-col items-center w-full pb-12 md:hidden">
        <FooterLinks />
      </div>
      <div className="flex flex-col rounded-none footer-bg">
        <div className="marquee footer-gradient-bg py-2 md:py-3">
          <Marquee />
        </div>
        <div className="max-w-[1400px] w-full px-0 md:px-10 m-auto max-md:max-w-full">
          <div className="flex gap-5 justify-between self-center mt-6 w-full pb-0 md:pb-8">
            <div className="flex flex-col items-start w-full md:w-[initial] max-md:max-w-full">
              <div className="self-center w-full max-w-full pl-5 px-5 md:px-0 md:pl-10">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-row items-center gap-8 md:gap-0 md:flex-col w-[25%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-xs tracking-wide leading-4 text-white mt-0">
                      <Image
                        loading="lazy"
                        src="/footer-logo.svg"
                        alt="KlubKoi logo"
                        className="object-contain aspect-square w-[84px]"
                        width={84}
                        height={84}
                      />
                      <div className="mt-4 max-w-[75%] md:max-w-full">
                        KlubKoi.com envisions to be the pioneer of introducing immersive casino
                        experiences to the world.
                      </div>
                    </div>
                    <div className="flex flex-col md:self-start text-xs leading-none text-center text-white md:hidden ">
                      <Image
                        loading="lazy"
                        src="/images/badge.png"
                        alt="Smart Contract Audit Badge"
                        className="object-contain self-center aspect-square w-[83px]"
                        width={83}
                        height={83}
                      />
                      <div className="flex flex-col mt-1 w-full">
                        <div className="font-bold tracking-[2.3px]">SMART CONTRACT</div>
                        <div className="tracking-wider">Audit Passed</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[75%] max-md:ml-0 max-md:w-full hidden md:flex">
                    <FooterLinks />
                  </div>
                </div>
              </div>
              <div className="bg-[#6F6F6F7A] h-[1px] mt-6 w-[90%] hidden md:block" />
              <div className="flex gap-10 mt-8 md:mt-5 items-center max-w-full pl-5 px-5 justify-center w-full md:w-[initial] md:pl-10 md:px-0">
                <div className="flex flex-auto gap-2 md:gap-4 items-start">
                  <div className="text-[8px] md:text-sm font-bold leading-4 text-white uppercase tracking-initial md:tracking-[3.03px]">
                    TECHNOLOGY
                    <br />
                    partner
                  </div>
                  <Image
                    src="/images/technology-partner.png"
                    alt="technology-partner"
                    width={160}
                    height={55}
                    className="w-[80px] md:w-[160px] md:h-[55px]"
                  />
                </div>
                <div className="flex gap-2 md:gap-4 self-start text-white whitespace-nowrap">
                  <div className="text-[8px] md:text-sm font-bold leading-4 uppercase tracking-initial md:tracking-[3.03px]">
                    MARKETING
                    <br />
                    PARTNER
                  </div>
                  <Image
                    src="/images/marketing-partner.png"
                    alt="marketing-partner"
                    width={160}
                    height={55}
                    className="w-[80px] md:w-[160px] md:h-[55px]"
                  />
                </div>
              </div>
              <div className="bg-[#6F6F6F7A] h-[1px] mt-6 w-[75%] hidden md:block" />
              <div className="flex gap-9 mt-5 max-w-full pl-10 copyright w-full py-2 md:py-0">
                <SocialIcons />
                <div className="flex-auto text-xs tracking-wider leading-5 text-white">
                  © Copyright 2023, All Rights Reserved by KlubKoi
                </div>
              </div>
            </div>
            <div className="flex flex-col self-start mt-11 text-xs leading-none text-center text-white max-md:mt-10 hidden md:flex ">
              <Image
                loading="lazy"
                src="/images/badge.png"
                alt="Smart Contract Audit Badge"
                className="object-contain self-center aspect-square w-[83px]"
                width={83}
                height={83}
              />
              <div className="flex flex-col mt-1 w-full">
                <div className="font-bold tracking-[2.3px]">SMART CONTRACT</div>
                <div className="tracking-wider">Audit Passed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
