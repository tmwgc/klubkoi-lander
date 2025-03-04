import React from "react";

interface MilestoneItemProps {
  text: string;
}

const MilestoneItem: React.FC<MilestoneItemProps> = ({ text }) => {
  return (
    <li className="flex gap-3 max-md:max-w-full">
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[32px] h-[32px]"
      >
        <path
          d="M16.0001 3.33398C8.65341 3.33398 2.66675 9.32065 2.66675 16.6673C2.66675 24.014 8.65341 30.0006 16.0001 30.0006C23.3467 30.0006 29.3334 24.014 29.3334 16.6673C29.3334 9.32065 23.3467 3.33398 16.0001 3.33398ZM22.3734 13.6006L14.8134 21.1607C14.6267 21.3473 14.3734 21.454 14.1067 21.454C13.8401 21.454 13.5867 21.3473 13.4001 21.1607L9.62675 17.3873C9.24008 17.0007 9.24008 16.3607 9.62675 15.974C10.0134 15.5873 10.6534 15.5873 11.0401 15.974L14.1067 19.0406L20.9601 12.1873C21.3467 11.8007 21.9867 11.8007 22.3734 12.1873C22.7601 12.574 22.7601 13.2007 22.3734 13.6006Z"
          fill="#69FF55"
          fillOpacity="0.85"
        />
      </svg>
      <p className="self-stretch my-auto w-[546px] max-md:max-w-full">{text}</p>
    </li>
  );
};

export default MilestoneItem;
