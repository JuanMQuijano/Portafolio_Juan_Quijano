let contenedorImagenes=document.querySelector(".imgContainer");for(let e=1;e<=2;e++){const n=document.createElement("picture");n.innerHTML=`    \n    <source srcset="media/c${e}.webp" type="image/webp">\n\n    <img loading="lazy" width="282" height="350" src="media/${e}.png" alt="Imagen Certificado">\n    `,n.onclick=function(){mostrarImagen(e)},n.classList.add("imgContainer--img"),contenedorImagenes.appendChild(n)}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n    <source srcset="media/c${e}.webp" type="image/webp">\n\n    <img loading="lazy" width="100%" height="100%" src="media/${e}.png" alt="Imagen Certificado">\n    `;const t=document.createElement("div");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const c=document.createElement("p");c.textContent="X",c.classList.add("btn-cerrar"),t.appendChild(c),c.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()};const o=document.querySelector("body");o.appendChild(t),o.classList.add("fijar-body")}