let formulario=document.querySelector(".formulario"),inputNombre=document.getElementById("Nombre"),inputCorreo=document.getElementById("Correo"),inputMensaje=document.getElementById("Mensaje"),button=document.querySelector(".formulario__boton"),contenedorAlerta=document.createElement("div");contenedorAlerta.classList.add("contenedorAlerta");let alerta=document.createElement("P");alerta.classList.add("alerta__mensaje");const datos={Nombre:"",Correo:"",Mensaje:""};inputNombre.addEventListener("input",leerInputs),inputCorreo.addEventListener("input",leerInputs),inputMensaje.addEventListener("input",leerInputs);let enviar=button.addEventListener("click",e=>{e.preventDefault();let t,{Nombre:n,Correo:r,Mensaje:o}=datos;""===n||""===r||""==o?generarMensaje(t="Debes completar el formulario"):r.includes("@")?(generarMensaje(t="Mensaje enviado"),limpiarCampos()):generarMensaje(t="Por favor revisa tu correo")});function leerInputs(e){datos[e.target.id]=e.target.value,console.log(datos)}function generarMensaje(e){alerta.textContent=e,contenedorAlerta.appendChild(alerta),formulario.appendChild(contenedorAlerta),setTimeout(()=>{alerta.remove()},5e3)}function limpiarCampos(){inputNombre.value="",inputCorreo.value="",inputMensaje.value=""}