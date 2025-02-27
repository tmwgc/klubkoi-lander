import React from "react";
import MilestoneItem from "./MilestoneItem";

interface MilestoneProps {
  text: string;
  completed: boolean;
}

interface QuarterSectionProps {
  heading: string;
  title: string;
  description: string;
  milestones: MilestoneProps[];
}

const QuarterSection: React.FC<QuarterSectionProps> = ({ title, description, milestones,heading }) => {
  return (
    <div className="max-md:pl-5">
      <h2 className="mb-[60px] max-md:mb-[0] gradient-text text-5xl font-black text-start w-fit leading-[52px] max-md:text-4xl ">
        {heading}
      </h2>
      <div className="ellipse pt-[50px] max-md:pt-[30px] text-lg  font-medium leading-none text-white max-md:max-w-full">
        <h3 className="text-4xl font-semibold text-white capitalize max-md:max-w-full max-md:text-3xl">{title}</h3>
        <p className="mt-2.5 leading-6 max-md:max-w-full max-md:text-md">{description}</p>
        <ul className="mt-4 space-y-2.5">
          {milestones.map((milestone, index) => (
            <MilestoneItem key={index} text={milestone.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuarterSection;
