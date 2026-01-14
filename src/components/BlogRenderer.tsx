import type { BlogRendererProps } from "@/assets/Types/Blog";

export default function BlogRenderer({
  MDXContent,
  meta,
}: Readonly<BlogRendererProps>) {
  return (
    <article className="max-w-5xl md:mx-auto m-2 p-3   md:p-5 space-y-6 border">
      {/* Meta */}
      <div>
        <p>
          {meta.date} · {meta.readTime ?? "--"} Read
        </p>

        {meta.tags && meta.tags.length > 0 && (
          <div className="flex gap-0.5 flex-wrap">
            {meta.tags.map((tag) => (
              <span key={tag} className="caption">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* Tags */}
      {/* Title + Subtitle */}
      <div className="space-y-2">
        <h3>{meta.title}</h3>
        <h6>{meta.subtitle}</h6>
      </div>

      {/* Image */}
      {meta.image && (
        <img
          src={meta.image}
          alt={meta.title}
          className="w-full object-cover"
        />
      )}

      {/* MDX Content */}
      <div id="mdx-content">
        <MDXContent />
      </div>
      <div className="mt-2">
        <p>
          {meta.views ?? 0} views · {meta.comments ?? 0} comments ·{" "}
          {meta.likes ?? 0} likes
        </p>
      </div>
    </article>
  );
}
