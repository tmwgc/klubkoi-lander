"use client";

import React from "react";

// const missions = [
//   {
//     title: "Delivering Immersive Casino Experience",
//     description:
//       "Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis. Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.",
//   },
//   {
//     title: "Remaining Web3 Focused Community Project",
//     description:
//       "Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis. Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.",
//   },
//   {
//     title: "Evolve as the most trusted gambling platform",
//     description:
//       "Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis. Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.",
//   },
// ];

export const MissionList: React.FC = () => {
  return (
    <article className="flex relative flex-col self-stretch my-auto w-full text-lg leading-snug max-md:my-10 max-md:max-w-full max-md:px-5">
      <h3 className="self-start text-3xl font-bold tracking-[3px]">OUR</h3>
      <h2 className="self-start text-6xl font-black gradient-text tracking-[3px] mb-4">VISION</h2>
      <p>
        Koi is on a mission to revolutionize the online gambling industry by returning power to the
        players. Unlike traditional casinos that have normalized hoarding profits, Koi is a
        community-owned platform where the most dedicated participants share in the project&#39;s
        success. Through blockchain empowered transparency and decentralized profit-sharing, Koi is
        an ecosystem where engagement is rewarded, not exploited!
      </p>
      {/* {missions.map((mission, index) => (
        <MissionItem
          key={index}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          title={mission.title}
          description={mission.description}
          className={"mt-12"}
        />
      ))} */}
    </article>
  );
};
