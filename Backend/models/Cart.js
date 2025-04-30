const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  userId: String, // or ObjectId if using authentication
  foodId: String,
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model('Cart', cartItemSchema);