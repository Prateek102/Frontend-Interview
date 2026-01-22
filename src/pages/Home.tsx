import { useState } from "react"
import BlogDetails from "@/components/ui/BlogDetails"
import BlogList from "@/components/ui/BlogList"
// import  CreateBlog from "@/components/ui/CreateBlog"
import CreateBlog from "@/components/CreateBlog"
import type { Blog } from "@/types/blog"

export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | undefined>()

  return (
    <>
      {/* BLOG SECTION */}
      <main
        id="home"
        className="flex flex-col md:flex-row gap-6 p-6 min-h-[calc(100vh-140px)] bg-slate-50"
      >
        <BlogList
          onSelect={setSelectedBlog}
          selectedId={selectedBlog?.id}
        />
        <BlogDetails blog={selectedBlog} />
      </main>

      

      {/* CREATE BLOG SECTION */}
      <section
        id="create-blog"
        className="px-6 md:px-16 lg:px-24 py-16 bg-slate-50"
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Create a New Blog
        </h2>
        <CreateBlog />
      </section>
    </>
  )
}
