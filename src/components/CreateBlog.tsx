import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "@/api/blogs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Blog } from "@/types/blog"

export default function CreateBlog() {
  const queryClient = useQueryClient()

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    coverImage: "",
    content: "",
  })

  const mutation = useMutation({
    mutationFn: (data: Omit<Blog, "id">) => createBlog(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
      setForm({
        title: "",
        category: "",
        description: "",
        coverImage: "",
        content: "",
      })
    },
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutation.mutate({
      title: form.title,
      category: form.category.split(",").map(c => c.trim()),
      description: form.description,
      coverImage: form.coverImage,
      content: form.content,
      date: new Date().toISOString(),
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl bg-white rounded-lg shadow-sm border p-6 space-y-5"
    >
      <Input
        name="title"
        placeholder="Blog Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <Input
        name="category"
        placeholder="Category (comma separated)"
        value={form.category}
        onChange={handleChange}
        required
      />

      <Input
        name="coverImage"
        placeholder="Cover Image URL"
        value={form.coverImage}
        onChange={handleChange}
        required
      />

      <Textarea
        name="description"
        placeholder="Short description"
        value={form.description}
        onChange={handleChange}
        rows={3}
        required
      />

      <Textarea
        name="content"
        placeholder="Blog content (plain text)"
        value={form.content}
        onChange={handleChange}
        rows={6}
        required
      />

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Publishing..." : "Publish Blog"}
      </Button>

      {mutation.isError && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again.
        </p>
      )}

      {mutation.isSuccess && (
        <p className="text-sm text-green-600">
          Blog published successfully 🎉
        </p>
      )}
    </form>
  )
}
