const ShoppingList = require("../models/ShoppingList");

const createList = async (req, res) => {
  const list = await ShoppingList.create({
    user: req.user._id,
    name: req.body.name,
    products: req.body.products,
  });

  res.status(201).json(list);
};

const getLists = async (req, res) => {
  const lists = await ShoppingList.find({ user: req.user._id });
  res.json(lists);
};

module.exports = {
  createList,
  getLists,
}; 