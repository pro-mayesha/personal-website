import BlogPostPage from "@/components/pages/BlogPostPage";

export default function NotePage({ params }) {
  return <BlogPostPage slug={params.slug} />;
}
