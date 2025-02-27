import React from "react";
import TimelineRoadmap from "./Roadmap";

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap-bg">
      <div className="max-w-[1600px] w-full m-auto max-md:max-w-full px-12 py-12 max-md:px-5">
        <div className="flex flex-col text-center justify-center items-center gap-5">
          <h1 className="text-5xl font-bold text-center text-white max-w-[360px] m-auto leading-[52px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            <span className="gradient-text">The Roadmap</span> to{" "}
            <span className="gradient-text">Growth</span>
          </h1>
          <p className="max-w-[700px] font-semibold	">
            As Koi continues to push the boundaries of online wagering, each quarter builds on the
            last—expanding the world, deepening the experience, and increasing rewards for those who
            power the ecosystem.
          </p>
        </div>
        <TimelineRoadmap />
      </div>
    </section>
  );
};

export default Roadmap;
