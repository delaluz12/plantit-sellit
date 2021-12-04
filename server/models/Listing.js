const mongoose = require('mongoose');

const { Schema } = mongoose;

const listingSchema = new Schema({
  listingDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;