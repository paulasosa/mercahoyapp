import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={
          product.image ||
          "https://via.placeholder.com/300"
        }
        alt={product.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">
          {product.name}
        </h3>

        <p className="text-gray-500 mb-2">
          {product.supermarket}
        </p>

        <p className="text-2xl font-bold text-green-600 mb-4">
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;