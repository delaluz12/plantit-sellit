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

  type User {
    _id: ID
    role: String
    firstName: String
    lastName: String
    address: String
    city: String
    state: String
    zipCode: String
    email: String
    orders: [Order]
    listings: [Product]
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
  }

  type Mutation {
    addProduct(name: String!, description: String, image: String, category: ID!, price: Float!, sellerId: ID, buyerId: ID, sold: Boolean): Product
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, address: String, city: String, state:String, zipCode: String): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, address: String, city: String, state:String, zipCode: String): User
    updateProduct(_id: ID!, sold: Boolean!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
