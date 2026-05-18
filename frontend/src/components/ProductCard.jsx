import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.supermarket}</p>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Agregar
      </button>
    </div>
  );
};

export default ProductCard; 