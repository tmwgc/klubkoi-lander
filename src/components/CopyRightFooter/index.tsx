import React from "react";
import FooterLegal from "./FooterLegal";
import FooterLogos from "./FooterLogos";

const CopyRightFooter = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full pt-12 pb-20 px-5 border-b-[1px] border-[#575757]">
      <div className="flex gap-10 items-center max-md:mt-10 max-md:max-w-full">
        <FooterLegal />
        <FooterLogos />
      </div>
    </section>
  );
};

export default CopyRightFooter;
