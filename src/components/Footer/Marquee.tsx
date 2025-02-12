import React from "react";
import ReactMarquee from "react-fast-marquee";
import Image from "next/image";

const marqueeItems = [
  { icon: "/icons/star.png", text: "GAMBLE UNLIMITED" },
  { icon: "/icons/star.png", text: "SOCIAL METAVERSE" },
  { icon: "/icons/star.png", text: "IMMERSIVE EXPERIENCE" },
  { icon: "/icons/star.png", text: "COMMUNITY OWNED" },
];

const Marquee = () => {
  return (
    <ReactMarquee autoFill>
      {marqueeItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mx-3 md:mx-5">
          <div className="w-6 aspect-square	 relative">
            <Image src={item.icon} alt={item.text} fill objectFit="contain" />
          </div>
          <span className="font-bold uppercase text-md md:text-xl">{item.text}</span>
        </div>
      ))}
    </ReactMarquee>
  );
};

export default Marquee;
