// routes/cart.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Add to cart or increment quantity
router.post('/add-to-cart', async (req, res) => {
  const { userId, foodId } = req.body;

  try {
    const existingItem = await Cart.findOne({ userId, foodId });

    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      res.json({ message: 'Cart item updated', cart: existingItem });
    } else {
      const newItem = new Cart({ userId, foodId });
      await newItem.save();
      res.json({ message: 'Item added to cart', cart: newItem });
    }
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
