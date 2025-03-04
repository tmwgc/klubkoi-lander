import React from "react";
import FooterLegal from "./FooterLegal";

const CopyRightFooter = () => {
  return (
    <section className="max-w-[1600px] w-full m-auto max-md:max-w-full pt-12 pb-20 px-10 max-md:px-5">
      <div className="flex gap-10 items-center max-md:max-w-full max-md:flex-col">
        <FooterLegal />
        {/* <FooterLogos /> */}
      </div>
    </section>
  );
};

export default CopyRightFooter;
