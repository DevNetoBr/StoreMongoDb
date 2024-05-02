const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  id: String,
  price: Number,
  brand: String,
  variants: Array,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
