import React from "react";
import LoginPortal from "@/components/LoginPortal";
import InvestmentPromotion from "@/components/InvesmentPromotion";
import CopyRightFooter from "@/components/CopyRightFooter";

const Page = () => {
  return (
    <div>
      <section className="section-blur-bg">
        <section className="max-w-[1400px] w-full m-auto max-md:max-w-full px-20 max-md:px-5">
          <div className="flex flex-col gap-5 pb-10">
            <div className="grid grid-cols-[auto_400px] max-md:grid-cols-1 max-md:place-items-center max-md:gap-12 gap-4 py-10 pb-15">
              <InvestmentPromotion />
              <LoginPortal
                title={"Investors"}
                subtitle={"Login portal"}
                description={
                  "Already an investor, and you have been issued with access credentials ? Login now and access"
                }
                className="max-w-[420px] w-full h-fit"
              />
            </div>
            <p className="text-center text-md max-md:text-xs max-w-[900px] m-auto">
              To enrol as new investor and gain access to recent opportunities in the space, press
              the apply to become an investor button and fill in the enrolment application. You
              shall be hearing back from our team with 24 Hours. For anymore queries and instant
              clarification in regards with investments, reach us out at invest@klubkoi.com
            </p>
          </div>
        </section>
      </section>
      <CopyRightFooter />
    </div>
  );
};

export default Page;
