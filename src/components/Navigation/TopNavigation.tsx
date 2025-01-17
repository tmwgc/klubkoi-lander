import * as React from "react";
import { NavItem } from "./NavItem";

const leftNavItems = [
  {
    icon: "/icons/user.svg",
    text: "Investor Relations",
    alt: "Investor relations icon",
  },
  {
    icon: "/icons/feather.svg",
    text: "Press Releases",
    alt: "Press releases icon",
  },
];

const rightNavItems = [
  {
    icon: "/icons/settings.svg",
    text: "Preferences",
    alt: "Preferences icon",
  },
  {
    icon: "/icons/phone.svg",
    text: "24X7 Assistance",
    alt: "24/7 assistance icon",
  },
];

const TopNavigation: React.FC = () => {
  return (
    <div className="max-w-[1400px] m-auto">
      <nav className="flex flex-wrap gap-10 h-[40px] justify-between items-center self-center w-full text-sm font-medium text-center text-white  max-md:max-w-full px-8 py-3">
        <div className="flex gap-8 items-center self-stretch my-auto min-w-[240px]">
          {leftNavItems.map((item, index) => (
            <NavItem key={`left-${index}`} icon={item.icon} text={item.text} alt={item.alt} />
          ))}
        </div>
        <div className="flex gap-10 items-center self-stretch my-auto min-w-[240px]">
          {rightNavItems.map((item, index) => (
            <NavItem key={`right-${index}`} icon={item.icon} text={item.text} alt={item.alt} />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default TopNavigation;
