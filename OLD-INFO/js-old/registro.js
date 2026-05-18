const form = document.getElementById("formRegistro");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("clave").value;
  const repetirClave = document.getElementById("repetirClave").value;

  // Validación básica
  if (!nombre || !correo || !clave || !repetirClave) {
    alert("Todos los campos son obligatorios");
    return;
  }

  if (clave !== repetirClave) {
    alert("Las contraseñas no coinciden");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, correo, clave }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Usuario registrado correctamente");
      form.reset();
    } else {
      alert(data.message || "Error al registrar");
    }
  } catch (error) {
    console.error(error);
    alert("Error de conexión con el servidor");
  }
});

// CREANDO TABLE PARA CRUD

async function crearTabla() {
  try {
    const res = await fetch("http://localhost:3000/crear-tabla");
    const data = await res.text();

    alert(data);
  } catch (error) {
    console.error("ERROR REAL:", error);
    alert("Error de conexión con el servidor");
  }
}

const API = "http://localhost:3000/api/usuarios";

// 🔹 READ
async function cargarUsuarios() {
  const res = await fetch(API);
  const data = await res.json();

  const tbody = document.querySelector("#tablaUsuarios tbody");
  tbody.innerHTML = "";

  data.forEach(user => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${user.id}</td>
      <td>${user.nombre}</td>
      <td>${user.correo}</td>
      <td>
        <button onclick="editarUsuario(${user.id}, '${user.nombre}', '${user.correo}')">Editar</button>
        <button onclick="eliminarUsuario(${user.id})">Eliminar</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

// 🔹 DELETE
async function eliminarUsuario(id) {
  if (!confirm("¿Eliminar usuario?")) return;

  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  cargarUsuarios();
}

// 🔹 UPDATE
async function editarUsuario(id, nombreActual, correoActual) {
  const nombre = prompt("Nuevo nombre:", nombreActual);
  const correo = prompt("Nuevo correo:", correoActual);

  if (!nombre || !correo) return;

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, correo })
  });

  cargarUsuarios();
}

window.onload = cargarUsuarios;

