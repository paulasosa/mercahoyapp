import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Carrito = () => {
  const { cart, removeFromCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-10">
          Carrito de compras
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <h2 className="text-2xl font-bold mb-4">
              Tu carrito está vacío
            </h2>

            <p className="text-gray-500">
              Agrega productos desde el
              comparador.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-bold">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      {item.supermarket}
                    </p>

                    <p className="text-green-600 font-bold text-xl">
                      ${item.price}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(index)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-xl"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow h-fit">
              <h2 className="text-2xl font-bold mb-6">
                Resumen
              </h2>

              <p className="text-xl mb-6">
                Total:
                <span className="font-bold text-green-600 ml-2">
                  ${total}
                </span>
              </p>

              <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold">
                Finalizar compra
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;