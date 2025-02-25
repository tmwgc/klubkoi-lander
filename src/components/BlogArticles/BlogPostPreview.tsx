"use client";

import Image from "next/image";
import React from "react";

interface BlogPostPreviewProps {
  imageSrc: string;
  date: string;
  title: string;
  tag?: string;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  imageSrc,
  date,
  title,
  tag = "Product",
}) => {
  return (
    <article className="flex flex-col self-stretch pb-4 my-auto rounded-none w-full border border-solid border-zinc-800 border-b-0">
      <div className="w-full">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={title}
          width={320}
          height={160}
          className="object-contain z-10 max-w-full aspect-[2.05] w-full"
        />
        <div className="w-full px-6 py-5">
          <div className="flex gap-5 justify-between max-w-full text-xs font-medium tracking-wide leading-6 text-center text-white whitespace-nowrap mb-5">
            <span className="gap-2.5 px-3.5 py-1 my-auto bg-[var(--secondary)] text-[#010B33] bg-opacity-60 rounded-[881px]">
              {tag}
            </span>
          </div>
          <h2 className="text-lg font-semibold tracking-wide text-white">{title}</h2>
          <div className="flex gap-3 items-center w-full text-sm font-medium tracking-wide leading-6 text-center text-neutral-200">
            <div className="self-stretch my-auto w-4 aspect-square">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_203_4276)">
                  <path
                    d="M13.5118 2.62674H12.8503V1.30371H11.5272V2.62674H4.91208V1.30371H3.58904V2.62674H2.92753C2.19986 2.62674 1.60449 3.22211 1.60449 3.94978V14.534C1.60449 15.2617 2.19986 15.8571 2.92753 15.8571H13.5118C14.2395 15.8571 14.8348 15.2617 14.8348 14.534V3.94978C14.8348 3.22211 14.2395 2.62674 13.5118 2.62674ZM13.5118 14.534H2.92753V7.25736H13.5118V14.534ZM13.5118 5.93433H2.92753V3.94978H13.5118V5.93433Z"
                    fill="#E5E6E5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_203_4276">
                    <rect
                      width="15.8764"
                      height="15.8764"
                      fill="white"
                      transform="translate(0.28125 0.642578)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <time className="self-stretch my-auto">{date}</time>
          </div>
        </div>
        <div className="h-[1px] w-[calc(100%+40px)] bg-zinc-800 ml-[-20px]" />
      </div>
    </article>
  );
};

export default BlogPostPreview;
