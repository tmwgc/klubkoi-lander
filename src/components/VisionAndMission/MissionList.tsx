"use client";

import React, { useState } from "react";
import { MissionItem } from "./MissionItem";

const missions = [
  {
    title: "Delivering Immersive Casino Experience",
    description:
      "Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis. Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.",
  },
  {
    title: "Remaining Web3 Focused Community Project",
    description:
      "Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis. Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.",
  },
  {
    title: "Evolve as the most trusted gambling platform",
    description:
      "Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis. Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.Id eleifend quis urna tellus tempor facilisis at semper ac. Interdum tortor ut ac ullamcorper ac et facilisis.",
  },
];

export const MissionList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article className="flex relative flex-col self-stretch my-auto w-full text-lg font-semibold leading-snug max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start text-3xl font-bold gradient-text tracking-[5.76px]">MISSIONS</h2>
      {missions.map((mission, index) => (
        <MissionItem
          key={index}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          title={mission.title}
          description={mission.description}
          className={"mt-12"}
        />
      ))}
    </article>
  );
};
