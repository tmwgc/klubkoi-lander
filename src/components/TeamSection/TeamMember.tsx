import Image from "next/image";
import React from "react";

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  role: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, role }) => {
  return (
    <div className="flex overflow-hidden flex-col text-white">
      <div className="flex flex-col justify-center py-px w-full bg-blend-color">
        <div className="flex relative flex-col justify-end pb-16 w-full aspect-[0.618]">
          <div className="absolute bottom-[15%] inset-0 -z-1">
            <Image
              loading="lazy"
              src={imageSrc}
              alt={name}
              fill
              className="object-cover absolute size-full"
            />
          </div>
          <div className="flex relative flex-col justify-end w-full bg-blend-color">
            <div className="flex overflow-hidden z-10 flex-col justify-center team-card-bg p-8 -mb-16 w-full">
              <div className="flex overflow-hidden flex-col w-full ">
                <div className="text-4xl tracking-tighter uppercase">{name}</div>
                <div className="flex overflow-hidden flex-col w-full">
                  {/* <div className="text-xs font-medium tracking-normal uppercase">Function</div> */}
                  <div className="mt-2 text-lg font-bold">{role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
