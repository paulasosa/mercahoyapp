import React, { useState } from "react";
import api from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await api.post("/auth/register", {
      name,
      email,
      password,
    });

    alert("Usuario registrado");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Correo"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register; 