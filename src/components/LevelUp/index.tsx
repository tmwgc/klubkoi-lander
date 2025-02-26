import Image from "next/image";
import React from "react";

const LevelUp = () => {
  return (
    <section className="levelup-bg max-w-[1600px] w-full m-auto max-md:max-w-full pt-12 pb-20 px-10 border-b-[1px] border-[var(--divider)]">
      <div className="flex gap-10 items-center max-md:max-w-full max-md:flex-col">
        <section className="flex flex-col justify-center self-stretch my-auto w-[45%] max-md:w-full">
          <div className="pl-32 mt-16 max-md:pl-16">
            <Image
              src="/images/levelup.png"
              alt="level up"
              width={200}
              height={90}
              className="object-contain w-[200px] max-md:w-[150px] h-auto"
            />
            <h2 className="text-5xl font-black leading-10 text-white max-md:max-w-full max-md:text-3xl">
              <span className="gradient-text">LEVEL UP</span> & EARN{" "}
              <span className="gradient-text">REWARDS</span>
            </h2>
          </div>
        </section>

        <section className="self-stretch my-auto text-base leading-5 text-justify text-gray-100 w-[55%] max-md:max-w-full max-md:w-full">
          <p>
            Players who acquire Virtual Real Estate (VRE), such as Lounges, VIP Suites, and
            Hideaways, establish ownership within the digital Koi ecosystem. Owners of exclusive
            spaces are rewarded with daily drops of in-game features (such as cheats or access
            cards) which can be sold or used to further the Player&#39;s objectives within the game.
          </p>
          <br />
          <br />
          <p>
            The next objective? Achieve High Roller status. High Rollers gain access to the
            exclusive High Roller Staking Pool, earning a share of platform revenue generated across
            all casino applications, in-game sales, and marketing streams. The more you play, the
            more you stake, and the more you earn—staking your claim as a true VIP in the Koi
            ecosystem.
          </p>
        </section>
      </div>
    </section>
  );
};

export default LevelUp;
