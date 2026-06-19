import React from "react";
import { useCart } from "../context/CartContext";

const Carrito = () => {
  const { cart } = useCart();

  // 🧠 AGRUPAR POR SUPERMERCADO
  const groupedCart = cart.reduce((acc, item) => {
    const key = item.supermarket;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);

    return acc;
  }, {});

  // 💰 CALCULAR TOTAL POR SUPERMERCADO
  const getTotal = (items) => {
    return items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Carrito de compras
      </h1>

      {Object.keys(groupedCart).length === 0 ? (
        <p className="text-gray-500">
          El carrito está vacío
        </p>
      ) : (
        Object.keys(groupedCart).map((supermarket) => (
          <div key={supermarket} className="mb-8">

            {/* 🏪 SUPERMERCADO */}
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              🏪 {supermarket}
            </h2>

            <div className="bg-white rounded-xl shadow p-4">

              {/* PRODUCTOS */}
              {groupedCart[supermarket].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <div>
                    <p className="font-semibold">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Cantidad: {item.quantity}
                    </p>
                  </div>

                  <div className="font-bold">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}

              {/* 💰 TOTAL SUPERMERCADO */}
              <div className="mt-4 flex justify-between items-center text-lg font-bold">
                <span>Total {supermarket}</span>
                <span className="text-green-700">
                  ${getTotal(groupedCart[supermarket])}
                </span>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Carrito;