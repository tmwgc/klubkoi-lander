import React from "react";
import ReactMarquee from "react-fast-marquee";
import Image from "next/image";

const marqueeItems = [
  { icon: "/icons/star.png", text: "GAMBLE UNLIMITED" },
  { icon: "/icons/star.png", text: "SOCIAL METAVERSE" },
  { icon: "/icons/star.png", text: "IMMERSIVE EXPERIENCE" },
  { icon: "/icons/star.png", text: "COMMUNITY OWNED" },
  // Add more items as needed
];

const Marquee = () => {
  return (
    <ReactMarquee>
      {marqueeItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mx-8">
          <Image src={item.icon} alt={item.text} width={24} height={24} />
          <span className="font-bold text-xl">{item.text}</span>
        </div>
      ))}
    </ReactMarquee>
  );
};

export default Marquee;
