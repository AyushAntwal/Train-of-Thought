import type { Blog } from "@/assets/Types/Blog";
import blogs from "@/blogs/index";

export async function blogsLoader(): Promise<Blog[]> {
  const post: Blog[] = blogs;
  if (!post) {
    throw new Response("Post Not Found", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return post;
}
