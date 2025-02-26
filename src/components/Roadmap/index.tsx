import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <section className="roadmap-bg">
      <div className="max-w-[1600px] w-full m-auto max-md:max-w-full px-12 py-12">
        <h1 className="text-5xl font-bold text-center text-white max-w-[360px] m-auto leading-[52px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          <span className="gradient-text">The Roadmap</span> to{" "}
          <span className="gradient-text">Growth</span>
        </h1>
        <Image
          src="/images/roadmap.png"
          alt="Roadmap"
          width={1600}
          height={330}
          className="mt-10 w-full"
        />
      </div>
    </section>
  );
};

export default Roadmap;
