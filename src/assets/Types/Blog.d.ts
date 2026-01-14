export type Blog = {
  slug: string;
  MDXContent: React.ComponentType;
  meta: {
    date: string;
    readTime: string;
    image: string;
    title: string;
    subtitle: string;
    views: number;
    comments: number;
    likes: number;
    tags?: string[];
  };
};

export type Blogs = {
  slug: string;
  MDXContent: React.ComponentType;
  meta: Blog["meta"];
};

export type BlogRendererProps = {
  MDXContent: React.ComponentType;
  meta: Blog["meta"];
};
