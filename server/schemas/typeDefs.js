const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
    sellerId: User
    buyerId: User
    sold: Boolean
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Listing {
    _id: ID
    listingDate: String
    products: [Product]
  }

  type User {
    _id: ID
    role: String
    firstName: String
    lastName: String
    address: String
    city: String
    state: String
    zip: String
    email: String
    orders: [Order]
    listings: [Listing]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    users: [User]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    listings(_id: ID!): Listing
    # soldBySeller(sellerId: ID!): [Product]
    # notSoldBySeller(sellerId ID!): [Product]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    addListing(product: ID!): Listing
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
