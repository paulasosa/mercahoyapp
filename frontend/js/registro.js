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
    const response = await fetch("http://127.0.0.1:3000/api/usuarios", {
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