let inputNombre = document.getElementById('Nombre');
const inputCorreo = document.getElementById('Correo');
const inputMensaje = document.getElementById('Mensaje');
let button = document.querySelector('.formulario__boton');

const datos = {
    Nombre: '',
    Correo: '',
    Mensaje: ''
}

inputNombre.addEventListener('input', leerInputs);
inputCorreo.addEventListener('input', leerInputs);
inputMensaje.addEventListener('input', leerInputs);


button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(inputNombre);
})

function leerInputs(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

function validarFormulario(e) {
    e.preventDefault();

    const { Nombre, Correo, Mensaje } = datos;

    if (Nombre === "" || Correo === "" || Mensaje == "") {

    }
}