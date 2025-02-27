import React from "react";
import { disclaimer } from "@/config";

const FooterLegal = () => {
  return (
    <section className="self-stretch my-auto text-base font-medium leading-5 text-justify text-gray-100 max-md:max-w-full max-md:w-full">
      <div className="flex flex-col gap-2">
        <p>Koi Disclaimer</p>
        {disclaimer.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </section>
  );
};

export default FooterLegal;
