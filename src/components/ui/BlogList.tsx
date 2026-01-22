import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/api/blogs"
import type { Blog } from "@/types/blog"
import { Card } from "@/components/ui/card"
import { useEffect } from "react"

interface Props {
  onSelect: (blog: Blog) => void
  selectedId?: number
}

export default function BlogList({ onSelect, selectedId }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

   useEffect(() => {
    if (data && data.length > 0 && !selectedId) {
      onSelect(data[0])
    }
  }, [data, selectedId, onSelect])

  if (isLoading) return <p>Loading blogs...</p>
  if (isError) return <p>Error loading blogs</p>

  return (
    <aside className="w-full md:w-1/3 space-y-4 overflow-y-auto">
      {data?.map((blog) => (
        <Card
          key={blog.id}
          onClick={() => onSelect(blog)}
          className={`p-4 cursor-pointer ${
            selectedId === blog.id ? "border-primary" : ""
          }`}
        >
          <p className="text-xs text-muted-foreground">
            {blog.category.join(", ")} •{" "}
            {new Date(blog.date).toDateString()}
          </p>
          <h3 className="font-semibold">{blog.title}</h3>
          <p className="text-sm text-slate-600">{blog.description}</p>
        </Card>
      ))}
    </aside>
  )
}
