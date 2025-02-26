import * as React from "react";
import { NavItem } from "./NavItem";

const leftNavItems = [
  {
    icon: "/icons/user.svg",
    text: "Investor Relations",
    link: "/invesment-portal",
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
    <div className="max-w-[1600px] m-auto">
      <nav className="flex gap-5 md:gap-10 h-[40px] justify-between items-center self-center w-full text-sm font-medium text-center text-white  max-md:max-w-full px-4 md:px-8 py-3">
        <div className="flex gap-4 md:gap-8 items-center self-stretch my-auto">
          {leftNavItems.map((item, index) => (
            <NavItem key={`left-${index}`} {...item} />
          ))}
        </div>
        <div className="flex gap-4 md:gap-8 items-center my-auto">
          {rightNavItems.map((item, index) => (
            <NavItem key={`right-${index}`} {...item} showOnMobile />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default TopNavigation;
