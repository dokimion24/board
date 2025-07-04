import { GRAPHQL_ENDPOINT } from "./constants";

export async function fetchGraphQL<T = unknown>(
  query: string,
  variables = {}
): Promise<T> {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const result = await response.json();
  return result.data;
}
