"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is a Payment Gateway?",
    answer: "",
  },
  {
    question:
      "Do I need to pay to Instapay even when there is no transaction going on in my business?",
    answer: "",
  },
  {
    question: "What platforms does Instapay payment gateway support?",
    answer: "",
  },
  {
    question: "Does Instapay provide international payments support?",
    answer:
      "Yes, Instapay provides support for International transactions. We support all major international cards and 92 currencies including USD, EUR, GBP, SGD, AED.",
  },
  {
    question: "Is there any setup fee or annual maintainance fee that I need to pay regularly?",
    answer: "",
  },
];

export const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string>(faqData[3].question);

  return (
    <section>
      <div className="max-w-[1400px] w-full py-20 px-0 md:px-10 m-auto max-md:max-w-full border-b-[1px] border-[#575757]">
        <div className="flex flex-col items-center self-center w-full max-w-[946px] m-auto max-md:max-w-full">
          <header className="flex gap-6 justify-between items-center max-w-full">
            <h1 className="self-stretch my-auto text-6xl font-bold leading-none text-center text-lime-300 tracking-[6.72px] max-md:text-4xl">
              FAQ
            </h1>
            <h2 className="self-stretch my-auto text-4xl font-semibold leading-none text-white tracking-[4.54px] max-md:max-w-full">
              Frequently Asked Questions
            </h2>
          </header>

          <div className="mt-16 w-full rounded-none max-md:mt-10">
            <div className="flex max-md:flex-col">
              <div className="w-[calc(50%+70px)] relative z-10 max-md:ml-0 max-md:w-full">
                <nav className="z-10 mt-6 mr-0 text-base leading-5 text-neutral-400 max-md:max-w-full rounded-xl overflow-hidden">
                  {faqData.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedQuestion(faq.question)}
                      className={`flex flex-col justify-center w-full py-5 pr-3 pl-3.5 leading-none ${
                        selectedQuestion === faq.question
                          ? "bg-neutral-900 text-white font-medium"
                          : "bg-neutral-800"
                      } shadow-sm border-neutral-700 ${index === 0 ? "" : ""}`}
                    >
                      <div className="flex gap-5 justify-between items-center max-md:max-w-full">
                        <div className="flex gap-3.5 items-start self-stretch my-auto min-w-60 max-md:max-w-full">
                          <div className="flex shrink-0 bg-lime-100 rounded-full h-[19px] w-[19px]" />
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
                              stroke="#EAFFB6"
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
              <article className="w-[calc(50%+70px)] ml-[-70px] relative -z-1 max-md:ml-0 max-md:w-full bg-zinc-900 border border-solid border-zinc-800 rounded-xl">
                <div className="flex flex-col grow items-end px-[calc(theme(spacing.20)+35px)] pt-8 pb-2.5 w-full shadow-sm max-md:px-5 max-md:max-w-full">
                  <div className="max-w-full w-[372px]">
                    <h3 className="text-lg font-semibold leading-6 text-white">
                      {selectedQuestion}
                    </h3>
                    <p className="mt-8 text-base font-medium leading-5 text-zinc-400">
                      {faqData.find((faq) => faq.question === selectedQuestion)?.answer}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
