import Image from "next/image";
import React from "react";

const Leaderboard = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full">
      <Image
        src="/images/teams.png"
        alt="teams"
        width={700}
        height={300}
        className="w-[100%] h-auto"
      />
    </section>
  );
};

export default Leaderboard;
