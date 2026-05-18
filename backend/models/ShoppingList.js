const mongoose = require("mongoose");

const shoppingListSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
    products: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ShoppingList", shoppingListSchema); 