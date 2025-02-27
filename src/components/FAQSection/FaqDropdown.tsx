import { useState, useRef, useEffect } from "react";

interface Question {
  question: string;
  answer: string;
}

interface Topic {
  topic: string;
  questions: Question[];
}

interface FaqData {
  topics: Topic[];
}

interface CustomFaqDropdownProps {
  faq: FaqData;
  selectedTopic: Topic | null;
  setSelectedTopic: (topic: Topic) => void;
  setSelectedQuestion: (question: string) => void;
}

const CustomFaqDropdown: React.FC<CustomFaqDropdownProps> = ({
  faq,
  selectedTopic,
  setSelectedTopic,
  setSelectedQuestion,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTopicSelect = (topic: Topic): void => {
    setSelectedTopic(topic);
    setSelectedQuestion(topic.questions[0].question);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium border border-gray-700 rounded-lg hover:bg-[var(--text-variant-1)] transition-all duration-200"
      >
        <span className="text-white">{selectedTopic ? selectedTopic.topic : "Select a topic"}</span>
        {/* <ChevronDown 
          className={`text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        /> */}
        <div
          className={`text-white transition-transform duration-200 ${isOpen ? "rotate-[270deg]" : "rotate-90"}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.08789 3.35254L13.3917 9.65634L7.08789 15.9601"
              stroke="#F8DEFF"
              strokeWidth="1.57595"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 overflow-hidden bg-[var(--text-variant-1)] border border-gray-700 rounded-lg shadow-xl animate-fadeIn">
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {faq.topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => handleTopicSelect(topic)}
                className={`flex flex-col items-start w-full px-4 py-3 text-lg max-md:text-sm font-medium text-start transition-all duration-200 ${
                  selectedTopic === topic ? "bg-gray-800 text-[var(--primary)]" : "text-white"
                }`}
              >
                {topic.topic}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomFaqDropdown;
