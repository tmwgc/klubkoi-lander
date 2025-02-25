"use client";

import Image from "next/image";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        "service_6ge1ez9",
        "template_j2pciqw",
        {
          email: email,
          walletAddress: walletAddress,
        },
        "h20qnOesfK5gqxYo5"
      );

      console.log("Email sent successfully!", response);
      alert("Email sent successfully!");
      setEmail("");
      setWalletAddress("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <section
      id="early-access"
      className="flex relative flex-col items-center px-20 pt-14 pb-24 mt-4 w-full min-h-[593px] max-md:px-5 max-md:max-w-full"
    >
      <Image
        loading="lazy"
        src="/images/signup-bg.svg"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
        fill
      />
      <div className="flex relative flex-col max-w-full border-b border-black w-[693px]">
        <header className="flex flex-col w-full text-center text-gray-100 max-md:max-w-full">
          <h1 className="text-5xl font-bold leading-10 bg-clip-text max-md:max-w-full max-md:text-4xl">
            <span className="gradient-text">Signup for </span>Early Access &{" "}
            <span className="gradient-text">Airdrops</span>
          </h1>
          <p className="self-center mt-4 text-base font-medium leading-5 max-md:max-w-full">
            We&#39;re selecting handpicked first 100 player to experience our working product and
            share it for the community. Signup now and gain added early bird benefits as a loyalty
            bonus in return. Remember to paste the correct testnet Solana address. You&#39;ll be
            issued with Koi Tokens for exploring features in the platform
          </p>
        </header>
        <form className="self-center mt-12 max-w-full w-[619px] max-md:mt-10" onSubmit={sendEmail}>
          <div className="flex gap-2.5 items-center px-5 py-4 w-full rounded-sm bg-neutral-600 bg-opacity-80 min-h-[55px] max-md:max-w-full">
            <div className="flex items-center justify-center my-auto w-6 aspect-square">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_203_4187)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 4.23792V16.0094L14.4067 10.2684L13.5339 10.9669L18.1719 16.7649H0.828123L5.46609 10.9669L4.59326 10.2684L0 16.0094V4.23791L9.49944 12.4756L19 4.23792ZM18.9993 2.23633V2.75712L9.49989 10.9948L0.000445313 2.75713V2.23633H18.9993Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_203_4187">
                    <rect width="19" height="19" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="bg-transparent border-none text-white text-sm font-semibold leading-6 focus:outline-none w-full"
              aria-label="Email Address"
              required
            />
          </div>
          <div className="flex gap-2.5 items-center px-5 py-4 mt-6 w-full rounded-sm bg-neutral-600 bg-opacity-80 min-h-[55px] max-md:max-w-full">
            <div className="flex items-center justify-center my-auto w-6 aspect-square">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.8 2.8999C8.3568 2.8999 8 3.2567 8 3.6999C8 4.1431 8.3568 4.4999 8.8 4.4999H12C12.4432 4.4999 12.8 4.1431 12.8 3.6999C12.8 3.2567 12.4432 2.8999 12 2.8999H8.8ZM4.8 3.6999C4.3568 3.6999 4 4.0567 4 4.4999V18.8999C4 19.3431 4.3568 19.6999 4.8 19.6999H11.2V12.978L15.7828 8.4999H16.8V4.4999C16.8 4.0567 16.4432 3.6999 16 3.6999H14.4V5.2999C14.4 5.7431 14.0432 6.0999 13.6 6.0999H7.2C6.7568 6.0999 6.4 5.7431 6.4 5.2999V3.6999H4.8ZM17.0797 11.6999L13.6 15.1343V21.3483C13.6 21.8343 13.9966 22.2249 14.4891 22.2249H20.7109C21.2034 22.2249 21.6 21.8343 21.6 21.3483V12.5765C21.6 12.0905 21.2034 11.6999 20.7109 11.6999H17.0797Z"
                  fill="white"
                />
              </svg>
            </div>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Paste Solana Testnet Contract Address"
              className="bg-transparent border-none text-white text-sm font-semibold leading-6 focus:outline-none w-full"
              aria-label="Solana Testnet Contract Address"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-center text-sm font-semibold leading-6 text-black bg-white px-2.5 py-4 mt-6 rounded-sm shadow-2xl min-h-[60px] btn-gradient"
            aria-label="Whitelist Me"
          >
            Whitelist Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
