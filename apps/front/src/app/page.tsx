import Hero from "@/components/hero";
import Posts from "@/components/posts";
import { getPosts } from "@/lib/actions/postActions";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";

type Props = {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const { posts, totalCount } = await getPosts({
    page: page ? +page : undefined,
  });

  return (
    <main>
      <Hero />
      <Posts
        posts={posts}
        currentPage={page ? +page : 1}
        totalPages={Math.ceil(totalCount / DEFAULT_PAGE_SIZE)}
      />
    </main>
  );
}
