"use server";

import { fetchGraphQL } from "@/lib/fetchGraphQL";
import { GET_POSTS } from "@/lib/gqlQueries";
import { print } from "graphql";

export async function getPosts() {
  try {
    const result = await fetchGraphQL(print(GET_POSTS));
    return result.data?.posts || [];
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}
