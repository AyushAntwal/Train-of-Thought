import type { Blogs } from "@/assets/Types/Blog";

const blogFiles = import.meta.glob("./*.mdx", { eager: true });

const blogs: Blogs[] = Object.entries(blogFiles).map(([path, module]) => {
  // Extract slug from filename: './first-post.mdx' => 'first-post'
  const slug = path
    .split("/")
    .pop()!
    .replace(/\.mdx$/, "");
  const mod = module as any; // module.default + module.meta
  return {
    slug,
    MDXContent: mod.default,
    meta: mod.meta,
  };
});

export default blogs;
