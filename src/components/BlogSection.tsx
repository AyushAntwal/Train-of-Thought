import React from "react";

type BlogContentBlock = {
  h6?: string;
  p?: string;
  blockquote?: string;
  strong?: string;
  span?: string;
};

type Blog = {
  id: number;
  date: string;
  readTime: string;
  title: string;
  subtitle: string;
  image: string;
  content: BlogContentBlock[];
};

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard({ blog }: Readonly<BlogCardProps>) {
  return (
    <article className="border mx-auto p-6 space-y-6">
      {/* Meta */}
      <div>
        <p>
          {blog.date} · {blog.readTime}
        </p>
      </div>

      {/* Title + Subtitle */}
      <div className="space-y-3">
        <h4>{blog.title}</h4>
        <p>{blog.subtitle}</p>
      </div>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-2/3 h-auto m-auto object-cover"
        />
      </div>

      {/* Content Preview */}
      <div className="space-y-4">
        <div className="space-y-3">
          {blog.content.map((block, index) => (
            <React.Fragment key={"section" + index}>
              {block.h6 && <h6>{block.h6}</h6>}
              {block.p && <p>{block.p}</p>}
              {block.span && <span>{block.span}</span>}
              {block.strong && <strong>{block.strong}</strong>}
              {block.blockquote && (
                <blockquote className="border-l-2 pl-4">
                  “{block.blockquote}”
                </blockquote>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}
