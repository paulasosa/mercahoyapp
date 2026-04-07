const express = require('express');
const cors = require("cors");

const app = express();
const PORT = 3000;

/*app.get('/', (req, res) => {
  res.send('¡Por aqui empieza el backend!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:3000`);
});
*/



// Middleware
app.use(cors());
app.use(express.json());

// Simulación de base de datos
let usuarios = [];

// 🔹 CREATE (Registrar usuario)
app.post("/api/usuarios", (req, res) => {
  const { nombre, correo, clave } = req.body;

  if (!nombre || !correo || !clave) {
    return res.status(400).json({ message: "Datos incompletos" });
  }

  const existe = usuarios.find(u => u.correo === correo);
  if (existe) {
    return res.status(400).json({ message: "El usuario ya existe" });
  }

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    correo,
    clave
  };

  usuarios.push(nuevoUsuario);

  res.status(201).json({ message: "Usuario creado", usuario: nuevoUsuario });
});

// 🔹 READ (Listar usuarios)
app.get("/api/usuarios", (req, res) => {
  res.json(usuarios);
});

// 🔹 UPDATE
app.put("/api/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, correo } = req.body;

  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  usuario.nombre = nombre || usuario.nombre;
  usuario.correo = correo || usuario.correo;

  res.json({ message: "Usuario actualizado", usuario });
});

// 🔹 DELETE
app.delete("/api/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);

  usuarios = usuarios.filter(u => u.id !== id);

  res.json({ message: "Usuario eliminado" });
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

