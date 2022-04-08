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

let enviar =
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let { Nombre, Correo, Mensaje } = datos;
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
            limpiarCampos();            
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
    }, 5000);
}

function limpiarCampos() {

    setTimeout(()=>{
    inputNombre.value = '';
    inputCorreo.value = '';
    inputMensaje.value = '';
    location.reload();
    },5000)
}

// DE AQUÍ PARA ABAJO ES LA PARTE DE GALERÍA

let contenedorImagenes = document.querySelector('.imgContainer');

for(let i = 1; i <= 2; i++){
    const imagen = document.createElement("picture"); //Creamos una etiqueta picture por cada iteración del for

    //Insertamos en la etiqueta creada etiquetas source con las imagenes que vamos a cargar 
    imagen.innerHTML = `    
    <source srcset="media/c${i}.webp" type="image/webp">

    <img loading="lazy" width="282" height="350" src="media/${i}.png" alt="Imagen Certificado">
    `;

    //Al hacer click en una imagen va a llamar a la función de mostrarImagen y la va a mostrar
    imagen.onclick = function() {
        mostrarImagen(i);
    };

    imagen.classList.add('imgContainer--img');

    //En la sección de galería agregamos cada una de las imagenes recorridas en el for
    contenedorImagenes.appendChild(imagen);
}

function mostrarImagen(id) { //Esta función muestra la imagen con el id que le pasemos
    //Creamos una etiqueta picture
    const imagen = document.createElement("picture");

    //Le agreamos las siguientes etiquetas a la etiqueta picture
    imagen.innerHTML = `
    <source srcset="media/c${id}.webp" type="image/webp">

    <img loading="lazy" width="100%" height="100%" src="media/${id}.png" alt="Imagen Certificado">
    `;

    //Creamos una etiqueta div 
    const overlay = document.createElement("div");
    overlay.appendChild(imagen); //Al div le agregamos la imagen 
    overlay.classList.add("overlay"); //Le agregamos la clase overlay al div
    overlay.onclick = function() { //Cuando hagamos click en el overlay se va a eliminar el div 
        const body = document.querySelector("body");
        body.classList.remove("fijar-body"); //agregamos la clase para quitar el overflow
        overlay.remove(); //Eliminamos el overlay
    }

    //Creamos una etiqueta parrafo
    const botonCerrar = document.createElement("p");
    botonCerrar.textContent = "X"; //Le agregamos 'X' al parrafo
    botonCerrar.classList.add("btn-cerrar"); //Le agregamos la clase btn-cerrar a la etiqueta

    overlay.appendChild(botonCerrar); //Al div overlay le agregamos el botonCerrar

    botonCerrar.onclick = function() { //Al hacer click en el boton cerrar se va a eliminar el div
        const body = document.querySelector("body");
        body.classList.remove("fijar-body"); //agregamos la clase para quitar el overflow
        overlay.remove(); //Eliminamos el overlay
    };

    //Seleccionamos el body
    const body = document.querySelector("body");
    //Al body le agregamos el overlay
    body.appendChild(overlay);
    //Al body le agregamos la clase para quitar el overflow
    body.classList.add("fijar-body");
}