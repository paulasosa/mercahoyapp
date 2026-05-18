import React from "react";

const MisListas = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">
            Mis listas
          </h1>

          <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold">
            Nueva lista
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Mercado semanal
            </h2>

            <p className="text-gray-500 mb-6">
              8 productos guardados
            </p>

            <button className="bg-yellow-400 px-4 py-2 rounded-xl font-bold">
              Ver lista
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Productos hogar
            </h2>

            <p className="text-gray-500 mb-6">
              5 productos guardados
            </p>

            <button className="bg-yellow-400 px-4 py-2 rounded-xl font-bold">
              Ver lista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisListas;