import Image from "next/image";
import React from "react";

interface LevelCardProps {
  image: string;
  description: string;
}

const LevelCard: React.FC<LevelCardProps> = ({ image, description }) => {
  return (
    <div className="grid grid-cols-[240px_auto] max-md:grid-cols-1 items-center gap-10 max-md:gap-2">
      <Image
        src={image}
        alt="level up"
        width={240}
        height={280}
        className="object-contain w-[240px] max-md:w-[180px] h-auto shadow-[-13.29px_0px_13.29px_0px_#00000033]"
      />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LevelCard;
