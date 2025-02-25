import React from "react";
import BlogPostPreview from "./BlogPostPreview";

const blogs = [
  {
    imageSrc: "/blogs/casino.png",
    date: "Janusary 2, 2023",
    title: "Bitlocus recap january 2023",
  },
  {
    imageSrc: "/blogs/casino.png",
    date: "Janusary 2, 2023",
    title: "Bitlocus recap january 2023",
  },
  {
    imageSrc: "/blogs/casino.png",
    date: "Janusary 2, 2023",
    title: "Bitlocus recap january 2023",
  },
];

const BlogPostGrid: React.FC = () => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center justify-center gap-12 mt-20 max-md:mt-10 max-md:max-w-full">
      {blogs.map((blog, index) => (
        <BlogPostPreview key={index} imageSrc={blog.imageSrc} date={blog.date} title={blog.title} />
      ))}
    </section>
  );
};

export default BlogPostGrid;
