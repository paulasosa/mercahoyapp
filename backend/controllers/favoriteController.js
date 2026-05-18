const Favorite = require("../models/Favorite");

const addFavorite = async (req, res) => {
  const favorite = await Favorite.create({
    user: req.user._id,
    product: req.body.productId,
  });

  res.status(201).json(favorite);
};

const getFavorites = async (req, res) => {
  const favorites = await Favorite.find({ user: req.user._id }).populate(
    "product"
  );

  res.json(favorites);
};

module.exports = {
  addFavorite,
  getFavorites,
}; 