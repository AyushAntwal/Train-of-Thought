import BlogRenderer from "@/components/BlogRenderer";
import { Link, useLoaderData } from "react-router-dom";

export default function Post() {
  const post = useLoaderData();
  return (
    <div className="main">
      <Link to={"/collection"} className="mt-5 block">
        All Posts
      </Link>
      <div className="my-5">
        <BlogRenderer MDXContent={post.MDXContent} meta={post.meta} />
      </div>
    </div>
  );
}
