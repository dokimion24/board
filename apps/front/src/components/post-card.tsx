import { Post } from "@/lib/types/modelTypes";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";

type Props = Partial<Post>;

export default function PostCard({
  title,
  thumbnail,
  createdAt,
  content,
  slug,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-60 overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title ?? ""}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <Icons.media className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold break-all line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-500">
        {new Date(createdAt ?? "").toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-500 break-words line-clamp-3">
        {content}
      </p>
      <Link href={`/posts/${slug}`}>
        <Button>Read More</Button>
      </Link>
    </div>
  );
}
