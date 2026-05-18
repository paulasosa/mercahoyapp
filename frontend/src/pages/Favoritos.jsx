import React from "react";

const Favoritos = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-10">
          Productos favoritos
        </h1>

        <div className="bg-white p-10 rounded-2xl shadow text-center">
          <h2 className="text-2xl font-bold mb-4">
            No tienes favoritos aún
          </h2>

          <p className="text-gray-500">
            Guarda productos para revisarlos
            después.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Favoritos;