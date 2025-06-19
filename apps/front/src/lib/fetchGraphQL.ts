import { print } from "graphql";

export async function fetchGraphQL(
  query: string 
  variables?: Record<string, unknown>
) {
  const queryString = typeof query === "string" ? query : print(query);

  const response = await fetch("http://localhost:3000/graphql", {
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
