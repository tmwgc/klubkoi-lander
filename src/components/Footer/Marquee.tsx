import React from "react";
import ReactMarquee from "react-fast-marquee";
import Image from "next/image";


interface IMarqueeProps {
  items: {
    icon: string;
    text: string;
}[]
}

const Marquee:React.FC<IMarqueeProps> = ({items}) => {
  return (
    <ReactMarquee autoFill>
      {items.map((item, index) => (
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
