const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Listing } = require('../models');
const { populate } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51K0BxZKLr0iD6VeB2Kl01qwPm80m2vnRq8PIKTKN3kx1Avs0Mq5MZErhABUDZWEnyUEGp593dMHVL7BwZigt7EDY00EmrqnFRE');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    users: async () => {
      return await User.
      find().
      populate({ path: 'orders', populate: 'products' }).
      populate({ path: 'listings', populate: 'products'});
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    allProducts: async () => {
      return await Product.find().
      populate('category').
      populate('sellerId').
      populate('buyerId')      
    },
    productsBySeller: async (parent, sellerId ) => {
      return await Product.find(sellerId).
      populate('category').
      populate('sellerId').
      populate('buyerId')
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    listings: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'listings.products',
          populate: 'category'
        });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products').execPopulate();

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/s3images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addProduct: async (parent, args) => {
      console.log("args", args)
      const product = await Product.create(args);
      const listing = new Listing( product );
      console.log("listings", listing)
      await User.findByIdAndUpdate(args.sellerId, { $push: { listings: listing }});
      return product;
    },


    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    addListing: async (parent, { product }, context) => {
      console.log(context);
      if (context.user) {
        const listing = new Listing({ product });

        await User.findByIdAndUpdate(context.user._id, { $push: { listings: listing } });

        return listing;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, args ) => {
            
      return await Product.findByIdAndUpdate(args._id, args , { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
