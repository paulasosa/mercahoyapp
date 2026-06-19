import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <section className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Compara precios y ahorra en tus compras
            </h1>

            <p className="text-xl mb-8">
              Encuentra los mejores precios entre supermercados y organiza tus compras fácilmente.
            </p>

            <Link
              to="/comparador"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
            >
              Comparar precios
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e"
              alt="Supermercado"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">
          ¿Por qué usar MERCADOHOY?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Comparación inteligente
            </h3>
            <p className="text-gray-600">
              Encuentra los mejores precios de cada producto.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ahorra dinero
            </h3>
            <p className="text-gray-600">
              Reduce tus gastos mensuales comparando supermercados.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Organiza tus compras
            </h3>
            <p className="text-gray-600">
              Guarda listas y productos favoritos.
            </p>
          </div>
        </div>
      </section>

      {/* 🛒 PRODUCTOS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Productos disponibles
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">
            No hay productos disponibles
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* IMAGEN */}
                <img
                  src={
                    p.image ||
                    "https://via.placeholder.com/300x200?text=Sin+Imagen"
                  }
                  alt={p.name}
                  className="w-full h-40 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{p.name}</h3>
                  <p className="text-gray-500 mb-3">{p.category}</p>

                  {/* PRECIOS */}
                  <div className="space-y-2">
                    {p.prices?.map((price, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border p-2 rounded-lg"
                      >
                        <span className="text-sm">
                          🏪 {price.supermarket}
                        </span>

                        <span className="font-bold">
                          ${price.price}
                        </span>

                        {/* BOTÓN CARRITO */}
                        <button
                          onClick={() =>
                            addToCart({
                              productId: p._id,
                              name: p.name,
                              supermarket: price.supermarket,
                              price: price.price
                            })
                          }
                          className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700"
                        >
                          Agregar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default Home;