const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getCart,
  addToCart,
} = require("../controllers/cartController");

router.get("/", protect, getCart);
router.post("/", protect, addToCart);

module.exports = router; 