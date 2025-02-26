import React from "react";
import TeamMember from "./TeamMember";

export const teamMembers = [
  {
    imageSrc: "/teams/member1.png",
    name: "Mstt",
    role: "Project Founder",
  },
  {
    imageSrc: "/teams/member2.png",
    name: "Sam",
    role: "Chief Technical Officer",
  },
  {
    imageSrc: "/teams/member3.png",
    name: "Bobby",
    role: "Chief Financial Officer",
  },
  {
    imageSrc: "/teams/member4.png",
    name: "Hannah",
    role: "Chief Marketing Officer",
  },
];

const TeamSection = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full">
      <div className="flex flex-col">
        <div className="w-[85%] bg-[var(--divider)] h-[1px]"></div>
        <div className="flex flex-col items-start px-5 w-full max-md:pr-5 max-md:max-w-full">
          <div className="py-16 w-full max-md:max-w-full relative">
            <div className="flex items-center gap-5 max-md:flex-col">
              <div className="flex flex-col w-[550px] max-md:ml-0 max-md:w-full">
                <div className="w-full text-6xl font-semibold max-md:max-w-full max-md:text-4xl">
                  Meet The <span className="gradient-text">Team Building Koi</span>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
                <div className="w-full bg-[#FFFFFF] h-[1px]"></div>
              </div>
              <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                <div className="mt-5 text-xl font-semibold text-white rotate-[1.7484555314694994e-7rad]">
                  Know the team behind our extraordinary platform. We assembled the best minds to
                  give life to Klubkoi
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0">
              <svg
                width="172"
                height="172"
                viewBox="0 0 172 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-md:w-[80px] max-md:h-[80px]"
              >
                <path
                  d="M171.013 0.196777V120.928L149.173 99.0992V22.0253H72.1102L50.2706 0.196777H171.013Z"
                  fill="#F3C9FF"
                />
                <path
                  d="M121.437 51.0976V171.84L99.5979 150V72.9374H22.5349L0.695312 51.0976H121.437Z"
                  fill="#BCACFF"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full bg-[var(--divider)] h-[1px]"></div>
        <div className="grid grid-cols-4 gap-2 items-center py-16 max-md:grid-cols-2 max-md:gap-5 max-md:px-5">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        <div className="w-full bg-[var(--divider)] h-[1px]"></div>
      </div>
    </section>
  );
};

export default TeamSection;
