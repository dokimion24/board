import { print } from "graphql";
import { GRAPHQL_ENDPOINT } from "./constants";

export async function fetchGraphQL(
  query: string,
  variables?: Record<string, unknown>
) {
  const queryString = typeof query === "string" ? query : print(query);

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: queryString,
      variables,
    }),
  });

  const result = await response.json();
  return result;
}
