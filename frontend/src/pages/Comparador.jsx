import React from "react";
import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

const Comparador = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await api.get("/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Comparador de precios</h1>

      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Comparador; 