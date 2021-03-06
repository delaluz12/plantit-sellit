const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    min: 0.99
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }, 
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  sold: {
    type: Boolean,
    default: false
  },
  shipStatus: {
    type: String
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;