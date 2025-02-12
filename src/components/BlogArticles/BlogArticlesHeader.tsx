"use client";

import React from 'react';

interface BlogArticlesHeaderProps {
  title?: string;
  subtitle?: string;
}

export const BlogArticlesHeader: React.FC<BlogArticlesHeaderProps> = ({
  title = "LATEST ARTICLES FROM BLOG",
  subtitle = "Read articles from our blog on casino"
}) => {
  return (
    <header className="flex flex-col justify-between items-center self-center w-full text-center max-md:max-w-full">
      <h1 className="text-4xl font-bold text-white tracking-[4.32px] max-md:max-w-full">
        {title}
      </h1>
      <p className="mt-1.5 text-lg font-medium tracking-wide leading-snug text-neutral-200">
        {subtitle}
      </p>
    </header>
  );
};

export default BlogArticlesHeader;