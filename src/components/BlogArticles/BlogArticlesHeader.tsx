"use client";

import React from "react";

export const BlogArticlesHeader = () => {
  return (
    <header className="flex items-center justify-center w-full text-center max-w-[400px] m-auto max-md:max-w-full">
      <h1 className="text-5xl font-bold text-white tracking-[4.32px] max-md:max-w-full">
        Latest <span className="gradient-text">Articles</span> From{" "}
        <span className="gradient-text">Blog</span>
      </h1>
      {/* <p className="mt-1.5 text-lg font-medium tracking-wide leading-snug text-neutral-200">
        {subtitle}
      </p> */}
    </header>
  );
};

export default BlogArticlesHeader;
