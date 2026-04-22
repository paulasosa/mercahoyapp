const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "paulasosa",
  database: "mercadohoy"
});

conexion.connect((err) => {
  if (err) {
    console.error("Error de conexión:", err);
    return;
  }
  console.log("Conectado a MySQL");
});


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

  const sql = "INSERT INTO usuarios (nombre, correo, clave) VALUES (?, ?, ?)";

  conexion.query(sql, [nombre, correo, clave], (err, result) => {
    if (err) {
      console.error("ERROR SQL:", err);
      return res.status(500).json({ message: "Error al guardar" });
    }

    res.json({ message: "Usuario guardado" });
  });
});



// 🔹 READ (Listar usuarios)
app.get("/api/usuarios", (req, res) => {
  const sql = "SELECT * FROM usuarios";

  conexion.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error al obtener usuarios" });
    }

    res.json(results);
  });
});

// 🔹 UPDATE

app.put("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, correo } = req.body;

  const sql = "UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?";

  conexion.query(sql, [nombre, correo, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error al actualizar" });
    }

    res.json({ message: "Usuario actualizado" });
  });
});

// 🔹 DELETE

app.delete("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM usuarios WHERE id = ?";

  conexion.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error al eliminar" });
    }

    res.json({ message: "Usuario eliminado" });
  });
});
