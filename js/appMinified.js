let formulario=document.querySelector(".formulario"),inputNombre=document.getElementById("Nombre"),inputCorreo=document.getElementById("Correo"),inputMensaje=document.getElementById("Mensaje"),button=document.querySelector(".formulario__boton"),contenedorAlerta=document.createElement("div");contenedorAlerta.classList.add("contenedorAlerta");let alerta=document.createElement("P");alerta.classList.add("alerta__mensaje");const datos={Nombre:"",Correo:"",Mensaje:""};inputNombre.addEventListener("input",leerInputs),inputCorreo.addEventListener("input",leerInputs),inputMensaje.addEventListener("input",leerInputs);let enviar=button.addEventListener("click",e=>{e.preventDefault();let t,{Nombre:n,Correo:o,Mensaje:r}=datos;""===n||""===o||""==r?generarMensaje(t="Debes completar el formulario"):o.includes("@")?(generarMensaje(t="Mensaje enviado"),limpiarCampos()):generarMensaje(t="Por favor revisa tu correo")});function leerInputs(e){datos[e.target.id]=e.target.value,console.log(datos)}function generarMensaje(e){alerta.textContent=e,contenedorAlerta.appendChild(alerta),formulario.appendChild(contenedorAlerta),setTimeout(()=>{alerta.remove()},5e3)}function limpiarCampos(){setTimeout(()=>{inputNombre.value="",inputCorreo.value="",inputMensaje.value="",location.reload()},5e3)}let contenedorImagenes=document.querySelector(".imgContainer");for(let e=1;e<=2;e++){const t=document.createElement("picture");t.innerHTML=`    \n    <source srcset="media/c${e}.webp" type="image/webp">\n\n    <img loading="lazy" width="282" height="350" src="media/${e}.png" alt="Imagen Certificado">\n    `,t.onclick=function(){mostrarImagen(e)},t.classList.add("imgContainer--img"),contenedorImagenes.appendChild(t)}function mostrarImagen(e){const t=document.createElement("picture");t.innerHTML=`\n    <source srcset="media/c${e}.webp" type="image/webp">\n\n    <img loading="lazy" width="100%" height="100%" src="media/${e}.png" alt="Imagen Certificado">\n    `;const n=document.createElement("div");n.appendChild(t),n.classList.add("overlay"),n.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()};const o=document.createElement("p");o.textContent="X",o.classList.add("btn-cerrar"),n.appendChild(o),o.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()};const r=document.querySelector("body");r.appendChild(n),r.classList.add("fijar-body")}