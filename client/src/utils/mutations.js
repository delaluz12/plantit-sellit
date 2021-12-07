import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
         category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $state: String
    $city: String
    $address: String
    $zip: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      state: $state
      city: $city
      address: $address
      zip: $zip
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String
    $category: ID!
    $price: Float!
    $sellerid: ID
    $image: String!
  ) {
    addProduct(
      name: $name
      category: $category
      price: $price
      sellerId: $sellerid
      image: $image
      description: $description
    ) {
      _id
      name
      description
      image
      price
      category {
        _id
      }
      sellerId {
        _id
      }
      sold
    }
  }
`;
