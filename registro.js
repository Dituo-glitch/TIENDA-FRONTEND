const loginForm = document.querySelector(".formulario");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const lugar = document.getElementById("lugar");
const direccion = document.getElementById("direccion");
const terminos = document.getElementById("terminos");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita recargar la página

    const nombreVal = nombre.value.trim();
    const correoVal = correo.value.trim();
    const contrasenaVal = contrasena.value.trim();
    const lugarVal = lugar.value;
    const direccionVal = direccion.value.trim();

    // 1. Validar campos vacíos
    if (!nombreVal || !correoVal || !contrasenaVal || !direccionVal) {
        alert("Por favor, rellena todos los campos obligatorios.");
        return;
    }

    // 2. Validar que acepte los términos
    if (!terminos.checked) {
        alert("Debes aceptar los términos y condiciones para continuar.");
        return;
    }

    // 3. Crear el objeto con toda la información guardada
    const nuevoUsuario = {
        nombre: nombreVal,
        correo: correoVal,
        contrasena: contrasenaVal, 
        lugar: lugarVal,
        direccion: direccionVal
    };

    // 4. Guardar en localStorage
    localStorage.setItem("usuarioRegistrado", JSON.stringify(nuevoUsuario));

    alert("¡Usuario registrado con éxito en MerCaSede!");

    // Redirección (Asegúrate de que el nombre del archivo coincida con tu página de inicio)
    window.location.href = "inicio.html"; 
});