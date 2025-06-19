import gql from "graphql-tag";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      slug
      content
      thumbnail
      published
      createdAt
      updatedAt
    }
  }
`;
