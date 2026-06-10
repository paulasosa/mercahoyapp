import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold text-green-600"
        >
          MERCADOHOY
        </Link>

        <div className="flex gap-6 font-semibold">
          <Link to="/">Inicio</Link>

          <Link to="/register">
            Registro
          </Link>

          <Link to="/login">
            Ingreso Usuarios
          </Link>

          <Link to="/comparador">
            Comparador
          </Link>

          <Link to="/carrito">
            Carrito
          </Link>

          <Link to="/favoritos">
            Favoritos
          </Link>

          <Link to="/mis-listas">
            Mis listas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;