let formulario = document.querySelector('.formulario');
let inputNombre = document.getElementById("Nombre");
let inputCorreo = document.getElementById("Correo");
let inputMensaje = document.getElementById("Mensaje");
let button = document.querySelector(".formulario__boton");
let contenedorAlerta = document.createElement("div");
contenedorAlerta.classList.add("contenedorAlerta");
let alerta = document.createElement("P");
alerta.classList.add('alerta__mensaje')

const datos = {
    Nombre: "",
    Correo: "",
    Mensaje: "",
};

inputNombre.addEventListener("input", leerInputs);
inputCorreo.addEventListener("input", leerInputs);
inputMensaje.addEventListener("input", leerInputs);

button.addEventListener("click", (e) => {
    e.preventDefault();
    const { Nombre, Correo, Mensaje } = datos;
    let mensajeAlerta;

    if (Nombre === "" || Correo === "" || Mensaje == "") {
        mensajeAlerta = "Debes completar el formulario";

        generarMensaje(mensajeAlerta);
    } else if (!Correo.includes("@")) {
        mensajeAlerta = "Por favor revisa tu correo";

        generarMensaje(mensajeAlerta);
    } else {
        mensajeAlerta = "Mensaje enviado";

        generarMensaje(mensajeAlerta);
    }
});

function leerInputs(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

function generarMensaje(mensaje) {
    alerta.textContent = mensaje;
    contenedorAlerta.appendChild(alerta);
    formulario.appendChild(contenedorAlerta);

    setTimeout(() => {
        alerta.remove();
        limpiarCampos();
    }, 5000);
}

function limpiarCampos() {
    inputNombre.value = '';
    inputCorreo.value = '';
    inputMensaje.value = '';

    inputNombre.textContent = '';
    inputCorreo.textContent = '';
    inputMensaje.textContent = '';

}