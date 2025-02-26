"use client";

import React from "react";
import { VisionCard } from "./VisionCard";
import { MissionList } from "./MissionList";

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="relative vision-bg py-12 mb-10 max-w-[1600px] w-full m-auto max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[57%] max-md:ml-0 max-md:w-full">
          <VisionCard />
        </div>
        <div className="ml-5 w-[43%] max-md:ml-0 max-md:w-full flex flex-col justify-center">
          <MissionList />
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
