"use client";

import { faq } from "@/config";
import React, { useState } from "react";

export const FAQSection = () => {
  const [selectedTopic, setSelectedTopic] = useState(faq.topics[0]);
  const [selectedQuestion, setSelectedQuestion] = useState<string>(
    selectedTopic.questions[0].question
  );

  return (
    <section>
      <div className="max-w-[1600px] w-full py-8 px-0 max-md:px-5 md:px-10 m-auto max-md:max-w-full border-b-[1px] border-[var(--divider)]">
        <div className="flex flex-col items-center self-center w-full m-auto  max-md:max-w-full">
          <header className="flex gap-12 justify-between items-center max-w-full max-md:flex-col max-md:items-start">
            <div className="flex gap-6">
              <h1 className="self-stretch my-auto text-6xl font-black leading-none text-center text-lime-300 tracking-[6.72px] max-md:text-4xl max-md:text-start font-advent-pro">
                <span className="gradient-text">FAQ</span>
              </h1>
              <h2 className="self-stretch my-auto text-4xl max-md:text-3xl font-semibold leading-none text-white tracking-[4.54px] max-md:tracking-[2px] max-md:max-w-full">
                Frequently Asked Questions
              </h2>
            </div>
            <p>
              Be it anything, we got you covered with our comprehensive knowledgebase that might
              help you understand our platform better and play professionally.
            </p>
          </header>
        </div>
      </div>
      <div className="max-w-[1600px] w-full py-0 px-0 max-md:px-5 md:px-10 m-auto max-md:max-w-full">
        <div className="flex overflow-x-auto gap-5">
          {faq.topics.map((faq, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedTopic(faq);
                setSelectedQuestion(faq.questions[0].question);
              }}
              className={`flex flex-col items-center justify-center w-full py-5 text-lg max-md:text-sm font-medium leading-none text-start ${
                selectedTopic === faq ? "faq-active" : "text-white"
              }`}
            >
              {faq.topic}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#131D43] border-b-[1px] border-t-[1px] border-[#091B63]">
        <div className="max-w-[1600px] pt-8 pb-16 px-12 w-full m-auto rounded-none max-md:mt-10">
          <div className="flex max-md:flex-col">
            <div className="w-[calc(50%+70px)] relative z-10 max-md:ml-0 max-md:w-full">
              <nav className="z-10 mt-6 mr-0 text-base leading-5 text-neutral-400 max-md:max-w-full rounded-xl overflow-hidden">
                {selectedTopic.questions.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedQuestion(faq.question)}
                    className={`flex flex-col justify-center w-full py-5 pr-3 pl-3.5 leading-none ${
                      selectedQuestion === faq.question
                        ? "bg-[#020A2C] text-white font-medium"
                        : "bg-[#0B1437]"
                    } shadow-sm border-neutral-700 ${index === 0 ? "" : ""}`}
                  >
                    <div className="flex gap-5 justify-between items-center max-md:max-w-full">
                      <div className="flex gap-3.5 items-start self-stretch my-auto min-w-60 max-md:max-w-full">
                        <div className="flex shrink-0 bg-[#F8DEFF] rounded-full h-[19px] w-[19px]" />
                        <p className="text-start">{faq.question}</p>
                      </div>
                      <div className="w-[20px] h-[20px]">
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
                    </div>
                  </button>
                ))}
              </nav>
            </div>
            <article className="w-[calc(50%+70px)] ml-[-70px] relative -z-1 max-md:ml-0 max-md:w-full bg-[#020A2C] border border-solid border-zinc-800 rounded-xl">
              <div className="flex flex-col grow items-end px-[calc(theme(spacing.20)+35px)] pt-8 pb-2.5 w-full shadow-sm max-md:px-5 max-md:max-w-full">
                <div className="max-w-full w-[372px]">
                  <h3 className="text-lg font-semibold leading-6 text-white">{selectedQuestion}</h3>
                  <p className="mt-8 text-base font-medium leading-5 text-zinc-400">
                    {
                      selectedTopic.questions.find((faq) => faq.question === selectedQuestion)
                        ?.answer
                    }
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
