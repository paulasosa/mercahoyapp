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
// const morgan = require('morgan');
const cors = require("cors");
//const { mongoose } = require('./database');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
/*app.listen(app.get('port'), () => {
  console.log('server activo en el puerto', app.get('port'));
});
*/

/*
EJEMPLO DE MATERIAL FORMACIÓN
// Configuraciones
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json()); // método que ayuda a convertir el código para que el servidor pueda entender lo que viene del cliente.
app.use(cors({origin: 'http://localhost:4200'})); // método para comunicar con el cliente
// rutas de nuestro servidor
app.use('/api/empleados',require('./routes/empleado.routes'));
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