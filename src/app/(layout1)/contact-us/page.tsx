import React from "react";
import LoginPortal from "@/components/LoginPortal";

const Page = () => {
  return (
    <section className="max-w-[1400px] w-full m-auto max-md:max-w-full px-20 max-md:px-5">
      <div className="flex flex-col py-20 pb-24">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-wide leading-10 text-white mb-8 uppercase">
            <span className="gradient-text">Contact us</span>
          </h1>
          <LoginPortal
            title={"Reach out"}
            subtitle={"TO OUR TEAM"}
            description={
              "Already an investor, and you have been issued with access credentials ? Login now and access"
            }
            className="max-w-[420px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
