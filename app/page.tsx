import BlogCard from "./components/blog-card";

export default function Home() {
  const post = {
    slug: "slug",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1683009427598-9c21a169f98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    title: "Lorem Ipsum is simply dummy text",
    categories: [{ categoryColor: "#0f0", name: "Genetics" }],
    author: {
      photo:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      name: "Jhone Doe",
    },
    createdAt: "1 Sept, 2023",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  };
  return (
    <div>
      <BlogCard post={post} />
      <BlogCard post={post} />
      <BlogCard post={post} />
    </div>
  );
}
