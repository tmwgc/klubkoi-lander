import React from "react";

interface QuarterHeaderProps {
  quarter: string;
}

const QuarterHeader: React.FC<QuarterHeaderProps> = ({ quarter }) => {
  return (
    <h3
      className="bg-clip-text text-transparent bg-[linear-gradient(118deg,#EBA6FF_7.47%,#60B7FF_62.48%)] max-md:text-4xl"
      aria-label={`${quarter} Development Phase`}
    >
      {quarter}
    </h3>
  );
};

export default QuarterHeader;
