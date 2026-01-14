import BlogCard from "@/components/BlogCard";
import { NavLink } from "react-router-dom";

import blogs from "@blogs/index";

export const posts = [
  {
    id: 1,
    image: "/images/blog_01.png",
    date: "Mar 23, 2023",
    readTime: "1 min read",
    title: "5 Songs That Make Me REALLY Happy",
    subtitle:
      "A short, punchy playlist that never fails to lift my mood, no matter how the day is going.",
    views: 0,
    comments: 0,
    likes: 6,
  },
  {
    id: 2,
    image: "/images/blog_02.png",
    date: "Apr 04, 2023",
    readTime: "3 min read",
    title: "Why Morning Coffee Tastes Better Alone",
    subtitle:
      "Thoughts on solitude, slow mornings, and why silence pairs perfectly with a hot cup of coffee.",
    views: 124,
    comments: 8,
    likes: 21,
  },
  {
    id: 3,
    image: "/images/blog_03.png",
    date: "May 11, 2023",
    readTime: "2 min read",
    title: "Designing My Workspace for Deep Focus",
    subtitle:
      "Small layout tweaks, lighting choices, and habits that helped me stay focused longer.",
    views: 89,
    comments: 3,
    likes: 14,
  },
  {
    id: 4,
    image: "/images/blog_04.png",
    date: "Jun 02, 2023",
    readTime: "4 min read",
    title: "Writing Things Down Changed Everything",
    subtitle:
      "How journaling daily brought clarity, reduced anxiety, and improved decision-making.",
    views: 231,
    comments: 12,
    likes: 35,
  },
  {
    id: 5,
    image: "/images/blog_05.png",
    date: "Jul 19, 2023",
    readTime: "2 min read",
    title: "Chasing Sunsets After Work",
    subtitle:
      "A reminder that small rituals after work can restore energy and perspective.",
    views: 56,
    comments: 1,
    likes: 9,
  },
];

export default function Collection() {
  return (
    <section>
      <div className="main p-3">
        <div className="flex gap-5 mb-5">
          <NavLink to={"/collection"}>All</NavLink>
          <NavLink to={"/collection?q=travel"}>Travel</NavLink>
          <NavLink to={"/collection?q=view"}>View</NavLink>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-2 gap-10">
          {blogs.map(({ slug, meta }) => (
            <BlogCard
              key={slug}
              slug={slug}
              image={meta.image}
              date={meta.date}
              readTime={meta.readTime}
              title={meta.title}
              subtitle={meta.subtitle}
              views={meta.views}
              comments={meta.comments}
              likes={meta.likes}
              dir="col"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
