import gql from "graphql-tag";

export const GET_POSTS = gql`
  query posts($skip: Float, $take: Float) {
    posts(skip: $skip, take: $take) {
      id
      title
      slug
      content
    }
    postCount
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation createUser($input: CreateUserInput) {
    createUser(createUserInput: $input) {
      id
      name
      email
    }
  }
`;
