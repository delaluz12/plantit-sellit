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
    shipStatus: String
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
    allProducts: [Product]
    productsBySeller(sellerId: ID): [Product]
    product(_id: ID!): Product
    user: User
    users: [User]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    listings(_id: ID!): Listing
  }

  type Mutation {
    addProduct(name: String!, description: String, image: String, category: ID!, price: Float!, sellerId: ID, buyerId: ID, sold: Boolean): Product
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, address: String, city: String, state:String, zip: String): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String, address: String, city: String, state:String, zip: String): User
    updateProduct(_id: ID!,name: String, description: String, image: String, category: ID, price: Float, sellerId: ID, buyerId: ID, sold: Boolean): Product
    login(email: String!, password: String!): Auth
    addListing(product: ID!): Listing
  }
`;

module.exports = typeDefs;
