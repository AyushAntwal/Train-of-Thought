import type { Blog } from "@/assets/Types/Blog";
import BlogCard from "@/components/BlogCard";
import { useLoaderData } from "react-router-dom";

export default function BlogSection() {
  const posts = useLoaderData();
  return (
    <section className="">
      <h4 className="leading-loose mb-8">TRAIN OF THOUGHT</h4>
      <div className=" lg:p-10 space-y-24">
        {posts.map((post: Blog) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            image={post.meta.image}
            date={post.meta.date}
            readTime={post.meta.readTime}
            title={post.meta.title}
            subtitle={post.meta.subtitle}
            views={post.meta.views}
            comments={post.meta.comments}
            likes={post.meta.likes}
          />
        ))}
      </div>
    </section>
  );
}
