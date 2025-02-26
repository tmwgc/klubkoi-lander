"use client";

import React from "react";
import InputField from "./InputField";

interface LoginPortalProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
}

const LoginPortal: React.FC<LoginPortalProps> = ({ className, title, subtitle, description }) => {
  return (
    <div
      className={`flex flex-col justify-center px-11 py-12 w-full rounded-md bg-zinc-600 bg-opacity-50 ${className}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col justify-between w-full min-h-[134px]">
          <div className="flex flex-col justify-center items-center self-center">
            <div className="text-2xl leading-none gradient-text tracking-[5.76px] uppercase">
              {title}
            </div>
            <div className="mt-2.5 text-3xl font-bold leading-none text-white tracking-[3.84px] uppercase">
              {subtitle}
            </div>
          </div>
          <div className="mt-5 text-base font-medium tracking-tight text-center text-white">
            {description}
          </div>
        </div>
        <form className="flex flex-col mt-5 w-full text-base text-white">
          <InputField
            type="email"
            placeholder="Email"
            iconSrc="/icons/email.svg"
            ariaLabel="Email"
          />
          <InputField
            type="password"
            placeholder="Password"
            iconSrc="/icons/lock.svg"
            ariaLabel="Password"
            showPasswordToggle
          />
          <button
            type="submit"
            className="gap-1.5 self-stretch px-1.5 py-3.5 mt-2.5 w-full text-base font-medium leading-none text-black rounded-sm min-h-[42px] btn-gradient"
          >
            Login Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPortal;
