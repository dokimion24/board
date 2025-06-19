import Hero from "@/components/hero";
import Posts from "@/components/Posts";
import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_POSTS } from "@/lib/gqlQueries";

async function getPosts() {
  try {
    const result = await fetchGraphQL(GET_POSTS);
    return result.data?.posts || [];
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">최신 게시글</h2>
        <Posts posts={posts} />
      </div>
    </main>
  );
}
