"use server";

import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_POSTS } from "@/lib/gqlQueries";
import { transformTakeSkip } from "@/lib/helpers";
import { print } from "graphql";
import { Post } from "../types/modelTypes";

export async function getPosts({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) {
  try {
    const { skip, take } = transformTakeSkip({ page, pageSize });
    const data = await fetchGraphQL(print(GET_POSTS), {
      skip,
      take,
    });
    return {
      posts: data.posts as Post[],
      totalCount: data.postCount,
    };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return {
      posts: [],
      totalCount: 0,
    };
  }
}
