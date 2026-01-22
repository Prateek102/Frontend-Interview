import type { Blog } from "@/types/blog"
import { Badge } from "@/components/ui/badge"

export default function BlogDetails({ blog }: { blog?: Blog }) {
  if (!blog) {
    return <p className="text-center">Select a blog to view details</p>
  }

  return (
    <section className="w-full md:w-2/3 space-y-4">
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-64 object-cover rounded"
      />

      <h1 className="text-2xl font-bold">{blog.title}</h1>

      <div className="flex gap-2 flex-wrap">
        {blog.category.map((cat) => (
          <Badge key={cat}>{cat}</Badge>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        {new Date(blog.date).toDateString()}
      </p>

      <p className="font-medium">{blog.description}</p>

      <p className="whitespace-pre-line">{blog.content}</p>
    </section>
  )
}
