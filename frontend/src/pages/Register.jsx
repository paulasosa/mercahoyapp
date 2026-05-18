import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-600">
          Crear cuenta
        </h1>

        <form
          onSubmit={submitHandler}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 font-semibold">
              Nombre
            </label>

            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border rounded-xl px-4 py-3"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Correo
            </label>

            <input
              type="email"
              placeholder="correo@email.com"
              className="w-full border rounded-xl px-4 py-3"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full border rounded-xl px-4 py-3"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition">
            Registrarse
          </button>
        </form>

        <p className="mt-6 text-center">
          ¿Ya tienes cuenta?
          <Link
            to="/login"
            className="text-green-600 font-bold ml-2"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;