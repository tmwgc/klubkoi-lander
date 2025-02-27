"use client";
import * as React from "react";
import QuarterSection from "./QuarterSection";
import { roadmap } from "@/config";

const TimelineRoadmap: React.FC = () => {
  const [show, setShow] = React.useState(false);
  return (
    <section aria-labelledby="roadmap-title">
      <div>
        <div
          className={`pl-5 mt-12 w-full max-md:mt-10 max-md:max-w-full overflow-x-auto max-md:overflow-x-revert roadmap-timeline relative overflow-y-hidden ${
            show ? "max-md:h-auto" : "max-md:h-[700px] max-md:overflow-y-hidden"
          }`}
        >
          <div className="flex gap-5 max-md:gap-10 max-md:flex-col relative min-w-max max-md:min-w-full">
            <div className="absolute top-[100px] max-md:top-[15px] h-[1px] w-full max-md:w-[1px] max-md:h-full roadmap-gradient"></div>
            {roadmap.map((data, index) => (
              <div
                key={index}
                className={`max-w-[680px] w-full max-md:ml-0 max-md:w-full ${
                  index !== 0 ? "ml-5" : ""
                }`}
              >
                <QuarterSection
                  heading={data.heading}
                  title={`${data.quarter} - ${data.title}`}
                  description={data.description}
                  milestones={data.milestones}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center justify-center hidden max-md:flex">
        <button
          className="bg-[var(--divider)] px-5 py-2 rounded-lg"
          onClick={() => setShow((s) => !s)}
        >
          {!show ? "show more" : "show less"}
        </button>
      </div>
    </section>
  );
};

export default TimelineRoadmap;
