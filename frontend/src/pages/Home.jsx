import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
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

      {/* 🛒 NUEVA SECCIÓN: PRODUCTOS */}
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
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-3">{p.category}</p>

                {p.prices?.map((price, index) => (
                  <p key={index} className="text-sm text-gray-700">
                    🏪 {price.supermarket}: ${price.price}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default Home;