import { FiHeart } from "react-icons/fi";

type BlogCardProps = {
  image: string;
  date: string;
  readTime: string;
  title: string;
  subtitle: string;
  views: number;
  comments: number;
  likes: number;
};

export default function BlogCard({
  image,
  date,
  readTime,
  title,
  subtitle,
  views,
  comments,
  likes,
}: Readonly<BlogCardProps>) {
  return (
    <article className="flex flex-col md:flex-row border border-border ">
      {/* Image */}
      <div className="md:w-5/12 ">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <div className="md:w-7/12 p-6 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Meta */}
          <div className="text-sm text-muted flex items-center gap-2">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="subtitle1 text-muted line-clamp-3">{subtitle}</p>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 w-full border-t border-border flex items-center justify-between text-sm text-muted">
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
