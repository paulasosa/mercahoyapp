const Cart = require("../models/Cart");

const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate(
    "products.product"
  );

  res.json(cart);
};

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = await Cart.create({
      user: req.user._id,
      products: [],
    });
  }

  cart.products.push({
    product: productId,
    quantity,
  });

  await cart.save();

  res.json(cart);
};

module.exports = {
  getCart,
  addToCart,
};