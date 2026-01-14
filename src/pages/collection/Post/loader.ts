import blogs from "@/blogs/index";
import { type LoaderFunctionArgs } from "react-router-dom";

export async function blogLoader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  const post = blogs.find((blog) => blog.slug === id);

  if (!post) {
    throw new Response("Post Not Found", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return post;
}
