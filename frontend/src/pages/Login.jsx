import React, { useState } from "react";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));

    alert("Login exitoso");
  };

  return (
    <form onSubmit={submitHandler}>
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

      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login; 