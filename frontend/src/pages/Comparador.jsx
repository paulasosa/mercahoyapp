import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import api from "../services/api";

import ProductCard from "../components/ProductCard";

import { CartContext } from "../context/CartContext";

const Comparador = () => {
  const [products, setProducts] = useState([]);

  const { addToCart } =
    useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get(
          "/products"
        );

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-10">
          Comparador de precios
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comparador;