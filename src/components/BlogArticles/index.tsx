import React from "react";
import BlogArticlesHeader from "./BlogArticlesHeader";
import BlogPostGrid from "./BlogPostGrid";

const BlogArticles = () => {
  return (
    <div className="max-w-[1400px] w-full m-auto max-md:max-w-full py-20 px-5 border-b-[1px] border-[#575757]">
      <BlogArticlesHeader />
      <BlogPostGrid />
    </div>
  );
};

export default BlogArticles;
