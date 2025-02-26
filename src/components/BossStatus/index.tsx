import React from "react";
import Image from "next/image";
import LevelCard from "./LevelCard";

const BossStatus = () => {
  return (
    <div>
      <section id="gameplay" className="max-w-[1600px] w-full m-auto max-md:max-w-full py-12 px-5">
        <div className="bg-[#0B1541] rounded-lg py-12 px-8 flex gap-10 items-center max-md:max-w-full max-md:flex-col">
          <section className="flex justify-center my-auto w-[45%] max-md:w-full">
            <div className="pl-16 flex gap-8 max-md:pl-0">
              <Image
                src="/images/diamond.png"
                alt="level up"
                width={90}
                height={90}
                className="object-contain w-[90px] max-md:w-[70px] h-auto"
              />
              <h2 className="text-5xl font-black leading-10 text-white max-md:max-w-full max-md:text-3xl">
                PROFIT LIKE
                <br />
                <span className="gradient-text">A BOSS</span>
              </h2>
            </div>
          </section>

          <section className="self-stretch my-auto text-base leading-5 text-justify text-gray-100 w-[55%] max-md:max-w-full max-md:w-full">
            <p>
              Within Koi, Boss Status is reserved for those who move beyond playing, to owning and
              profiting from the ecosystem. This exclusive tier consists of three levels, each
              offering increasing financial rewards and strategic advantages:
            </p>
          </section>
        </div>
      </section>
      <section className="max-w-[1600px] w-full m-auto max-md:max-w-full py-12 px-5">
        <div className="flex flex-col px-12 max-md:px-0 max-md:gap-10">
          <div className="w-[80%] max-md:w-[100%]">
            <LevelCard
              image="/levels/level1.png"
              description="players who acquire Virtual Real Estate (VRE), such as Lounges, VIP Suites, and Hideaways, establish ownership within the digital Koi ecosystem. Owners of exclusive spaces are rewarded with daily drops of in-game features (such as cheats or access cards) which can be sold or used to further the Player's objectives within the game."
            />
          </div>
          <div className="w-[80%] max-md:w-[100%] ml-20 max-md:ml-0 mt-[-20px] max-md:mt-0">
            <LevelCard
              image="/levels/level2.png"
              description="These players take ownership a step further by monetizing their VRE, bankrolling in-house games like Blackjack, Baccarat, and Slots to generate passive income from player activity"
            />
          </div>
          <div className=" w-[80%] max-md:w-[100%] ml-40 max-md:ml-0 mt-[-30px] max-md:mt-0">
            <LevelCard
              image="/levels/level3.png"
              description="Reserved for the 21 largest KOI Stakers, these individuals provide liquidity for the backend infrastructure of Koi’s casino operations. In return for cosigning the platform’s risk, Koi’s Whales earn privileged access to the most lucrative profit sharing within the ecosystem."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BossStatus;
