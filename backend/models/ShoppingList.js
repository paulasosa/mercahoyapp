const mongoose = require("mongoose");

const shoppingListSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        },

        quantity: {
          type: Number,
          default: 1
        }
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ShoppingList", shoppingListSchema); 