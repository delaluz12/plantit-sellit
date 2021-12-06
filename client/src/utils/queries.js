import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
        name
      }
    }
  }
`;
export const QUERY_PRODUCT = gql`
  query getProduct($_id: ID!) {
    product(_id: $_id) {
      _id
      name
      description
      image
      price
      category {
        name
      }
      sellerId {
        _id
        firstName
      }
      buyerId {
        _id
        firstName
      }
      sold
      shipStatus
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
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
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;

export const QUERY_ALL_PRODUCT_DATA = gql`
  query {
    allProducts {
      _id
      name
      description
      image
      price
      category {
        name
      }
      sellerId {
        _id
      }
      buyerId {
        _id
      }
      sold
      shipStatus
    }
  }
`;

export const QUERY_PRODUCTS_BY_SELLER = gql`
  query productsBySeller($sellerId: ID) {
    productsBySeller(sellerId: $sellerId) {
      _id
      name
      description
      image
      price
      category {
        name
      }
      sellerId {
        _id
      }
      buyerId {
        _id
      }
      sold
      shipStatus
    }
  }
`;
