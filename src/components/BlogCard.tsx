import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

type BlogCardProps = {
  slug: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
  subtitle: string;
  views: number;
  comments: number;
  likes: number;
  dir?: "row" | "col";
};

export default function BlogCard({
  slug,
  image,
  date,
  readTime,
  title,
  subtitle,
  views,
  comments,
  likes,
  dir = "row",
}: Readonly<BlogCardProps>) {
  return (
    <article
      className={`flex border border-border animation-on-view-delay ${
        dir === "row" ? "flex-col lg:flex-row " : "flex-col"
      }`}
    >
      {/* Image */}
      <div className={dir === "row" ? "w-full lg:w-5/12" : "w-full"}>
        <img
          src={image}
          alt={title}
          className="w-full h-full max-h-96 object-cover"
        />
      </div>

      {/* Content */}
      <div
        className={`p-6 flex flex-col justify-between ${
          dir === "row" ? "w-full lg:w-7/12" : "w-full"
        }`}
      >
        <div className="space-y-4">
          {/* Meta */}
          <div className="text-sm text-muted flex items-center gap-2">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          {/* Title */}
          <Link to={"/collection/" + slug}>
            <h2 className="text-2xl font-semibold leading-tight">{title}</h2>
          </Link>

          {/* Subtitle */}
          <p className="subtitle1 text-muted line-clamp-3">{subtitle}</p>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-sm text-muted">
          <div className="flex gap-4">
            <span>{views} views</span>
            <span>{comments} comments</span>
          </div>

          <button className="flex items-center gap-1 text-red-500 hover:text-red-600 transition">
            <span>{likes}</span>
            <FiHeart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
}
