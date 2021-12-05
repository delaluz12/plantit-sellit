import { gql } from '@apollo/client';

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
        quantity
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
    city:  $city
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

export const ADD_PRODUCT = gql `
mutation addProduct($input: ProductData){
  addProduct(input: $input){
    _id
    name
    role
    listings {
      _id
      name
      description
      image
      price
      category{
        _id
        name
      }
      sellerId{
        _id
        firstName
        lastName
      }
      soldStatus
    }

  }
}
`
