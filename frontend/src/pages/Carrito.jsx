import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>

      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Carrito; 