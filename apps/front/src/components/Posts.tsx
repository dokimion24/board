import { Post } from "@/lib/types/modelTypes";
import Pagination from "./pagination";
import PostCard from "./post-card";

interface PostsProps {
  posts: Post[];
  totalPages: number;
  currentPage: number;
}

export default function Posts({ posts, totalPages, currentPage }: PostsProps) {
  console.log(totalPages, currentPage);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts?.map((post) => <PostCard key={post.id} {...post} />)}
      </div>

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
      )}
    </>
  );
}
