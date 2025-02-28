"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import QuarterSection from "./QuarterSection";
import { roadmap } from "@/config";

const TimelineRoadmap: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  // Function to handle scrolling to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Get the width of a quarter section (approximately)
      const scrollAmount = 685; // 680px width + 5px margin
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Function to handle scrolling to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Get the width of a quarter section (approximately)
      const scrollAmount = 685; // 680px width + 5px margin
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: currentScroll - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update scroll buttons visibility based on scroll position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // Add small buffer
    }
  };

  // Initialize scroll state and add scroll event listener
  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      handleScroll(); // Initial check
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section aria-labelledby="roadmap-title" className="relative">
      {/* Arrow navigation for desktop */}
      <div className="mt-6 flex justify-end gap-6 max-md:hidden relative">
        <button
          onClick={scrollLeft}
          className={`bg-[var(--background)] border border-[var(--primary)] rounded-full p-2 shadow-md ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"
          }`}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollRight}
          className={`bg-[var(--background)] border border-[var(--primary)] rounded-full p-2 shadow-md ${
            !canScrollRight ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"
          }`}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div>
        <div
          ref={scrollContainerRef}
          className={`pl-5 mt-12 w-full max-md:mt-10 max-md:max-w-full overflow-x-auto max-md:overflow-x-revert roadmap-timeline relative overflow-y-hidden ${
            show ? "max-md:h-auto" : "max-md:h-[700px] max-md:overflow-y-hidden"
          }`}
        >
          <div className="flex gap-5 max-md:gap-10 max-md:flex-col relative min-w-max max-md:min-w-full">
            <div className="absolute top-[100px] max-md:top-[15px] h-[1px] w-full max-md:w-[1px] max-md:h-full roadmap-gradient"></div>
            {roadmap.map((data, index) => (
              <div
                key={index}
                className={`max-w-[680px] w-full max-md:ml-0 max-md:w-full ${
                  index !== 0 ? "ml-5" : ""
                }`}
              >
                <QuarterSection
                  heading={data.heading}
                  title={`${data.quarter} - ${data.title}`}
                  description={data.description}
                  milestones={data.milestones}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center justify-center hidden max-md:flex">
        <button
          className="bg-[var(--divider)] px-5 py-2 rounded-lg"
          onClick={() => setShow((s) => !s)}
        >
          {!show ? "show more" : "show less"}
        </button>
      </div>
    </section>
  );
};

export default TimelineRoadmap;
