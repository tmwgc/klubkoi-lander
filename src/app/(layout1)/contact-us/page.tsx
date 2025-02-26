import React from "react";
import InputField from "@/components/LoginPortal/InputField";

const Page = () => {
  return (
    <section className="max-w-[1600px] w-full m-auto max-md:max-w-full px-20 max-md:px-5">
      <div className="flex flex-col py-20 pb-24">
        <div className="flex flex-col items-center">
          {/* <h1 className="text-4xl font-bold tracking-wide leading-10 text-white mb-8 uppercase">
            <span className="gradient-text">Contact us</span>
          </h1> */}

          <div
            className={`flex flex-col justify-center px-11 py-12 w-full rounded-md bg-zinc-600 bg-opacity-50 max-w-[420px] w-full`}
          >
            <div className="flex flex-col">
              <div className="flex flex-col justify-between w-full min-h-[134px]">
                <div className="flex flex-col justify-center items-center self-center">
                  <div className="text-2xl leading-none gradient-text tracking-[5.76px] uppercase">
                    Reach out
                  </div>
                  <div className="mt-2.5 text-3xl font-bold leading-none text-white tracking-[3.84px] uppercase">
                    TO OUR TEAM
                  </div>
                </div>
                <div className="mt-5 text-base font-medium tracking-tight text-center text-white">
                  Already an investor, and you have been issued with access credentials ? Login now
                  and access
                </div>
              </div>
              <form className="flex flex-col mt-5 w-full text-base text-white">
                <InputField
                  type="text"
                  placeholder="Name"
                  iconSrc="/icons/user-white.svg"
                  ariaLabel="Name"
                />
                <InputField
                  type="email"
                  placeholder="Email"
                  iconSrc="/icons/email.svg"
                  ariaLabel="Email"
                />
                <textarea
                  placeholder="Message"
                  className="rounded-sm bg-neutral-500 bg-opacity-50 w-full px-5 py-3 outline-none resize-none"
                  rows={8}
                ></textarea>
                <button
                  type="submit"
                  className="gap-1.5 self-stretch px-1.5 py-3.5 mt-2.5 w-full text-base font-medium leading-none text-black rounded-sm min-h-[42px] btn-gradient"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
