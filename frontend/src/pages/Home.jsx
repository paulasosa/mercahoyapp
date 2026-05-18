import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Compara precios y ahorra en tus compras
            </h1>

            <p className="text-xl mb-8">
              Encuentra el supermercado más económico
              para cada producto.
            </p>

            <Link
              to="/comparador"
              className="bg-secondary text-dark px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
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
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Comparación inteligente
            </h3>

            <p>
              Encuentra los mejores precios entre
              supermercados.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ahorra dinero
            </h3>

            <p>
              Reduce gastos mensuales comparando
              productos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Listas inteligentes
            </h3>

            <p>
              Organiza tus compras de manera sencilla.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;