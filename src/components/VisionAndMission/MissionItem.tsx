import Image from "next/image";
import React from "react";

interface MissionItemProps {
  index: number;
  title: string;
  description?: string;
  className?: string;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const MissionItem: React.FC<MissionItemProps> = ({
  index,
  title,
  description,
  className = "",
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className={`${className} max-md:mt-10`}>
      <div
        className="flex gap-7 justify-between items-center text-white max-md:mr-2 cursor-pointer"
        onClick={() => setActiveIndex(index)}
      >
        <h3 className="self-stretch my-auto">{title}</h3>
        <Image
          loading="lazy"
          src={index === activeIndex ? "/icons/up-arrow.svg" : "/icons/down-arrow.svg"}
          alt=""
          width={27}
          height={27}
          className="object-contain shrink-0 self-stretch my-auto aspect-square fill-zinc-900 w-[27px]"
        />
      </div>
      {index === activeIndex && (
        <p className="mt-8 text-base leading-5 text-stone-300 max-md:max-w-full font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
