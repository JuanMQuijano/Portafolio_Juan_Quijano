<?php
require '../Portafolio/database/database.php';
//Llamamos a la función para conectar a la db
$db = conectarDB();

//Arreglo con mensajes de errores
$errores = [];

$enviado = false;

//Ejecutar el código después de que el usuario envie el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $mensaje = $_POST['mensaje'];

  //En caso de que alguna variable este vacia se va a añadir un mensaje de error al arreglo y se imprimirá
  if (!$nombre) {
    $errores[] = "Debes añadir un nombre";
  }

  if (!$correo) {
    $errores[] = "El correo es obligatorio";
  }

  if (!$mensaje) {
    $errores[] = "El mensaje es obligatorio";
  }

  //Revisamos que el arreglo de errores esté vacio
  if (empty($errores)) {
    //INSERTAMOS EN LA BASE DE DATOS
    $query = "INSERT INTO mensajes (nombre,correo,mensaje) VALUES ('$nombre', '$correo', '$mensaje')";

    $resultado = mysqli_query($db, $query);    
    if($resultado){
      $enviado = true;
    }
  }
}

include '../Portafolio/heading.php';
?>

<div class="introduccion">
  <p class="introduccion__texto">
    ¡Hola! <br />
    Mi nombre es Juan Quijano, nací en España, pero crecí en Colombia,
    actualmente (2022) tengo 21 años y soy estudiante de ingeniería
    informática en la Institución Universitaria Colegio Mayor del Cauca, en
    el año 2021 participé en el diplomado de Misión TIC en la Universidad de
    Antioquia con énfasis en desarrollo web impulsado por el gobierno
    nacional, si quieres ponerte en contacto conmigo te invito a que llenes
    el formulario que encontraras en la parte inferior de esta página web.
    <br />
    ¡Hasta pronto!
  </p>
  <div class="introduccion__imagen"></div>
</div>

<nav class="navegacion">
  <a class="navegacion__enlace" href="#about">¡About Me!</a>
  <a class="navegacion__enlace" href="#projects">¡Projects!</a>
  <a class="navegacion__enlace" href="#form">¡Get In Touch!</a>
</nav>

<main>
  <div class="aboutPro">
    <section class="about" id="about">
      <h1 class="about__titulo">¡About Me!</h1>
      <p class="about__parrafo">
        Apasionado por el desarrollo de software y el desarrollo web, fiel
        creyente del nunca parar de aprender.<br />
        <br />
        Conocimiento en lenguajes como: Java, PHP, SQL, JavaScript.
        <br />
        <br />
        Conocimiento en HTML5, CSS3, bootstrap.
      </p>
    </section>

    <section class="projects" id="projects">
      <h1 class="projects__titulo">¡Projects!</h1>
      <p class="projects__parrafo">
        En esta sección podrás conocer un poco más de mis proyectos, te
        invito a que navegues por las siguientes páginas web que he
        desarrollado haciendo uso de las mejores practicas:
      </p>
      <ol class="projects__list">
        <li class="projects__list--li">
          <a target="_blank" href="https://eager-clarke-9c3a8e.netlify.app/index.html">Blog de Café☕</a>
        </li>
        <li class="projects__list--li">
          <a target="_blank" href="https://boisterous-79047b.netlify.app/">ROCK & EDM Festival🤘🏻</a>
        </li>
      </ol>
    </section>
  </div>

  <section class="certificates">
    <h1 class="certificates__titulo">¡Certificates!</h1>
    <p class="certificates__parrafo">¡Haz click en alguno de los certificados para verlo mejor!</p>

    <div class="imgContainer">
    </div>
  </section>

  <section class="contenedorFormulario" id="form">
    <h1 class="contenedorFormulario__titulo">¡Get In Touch!</h1>

    <form class="formulario" method="POST" action="/index.php#form">
      <div class="separador">
        <label class="formulario__etiqueta" for="Nombre">Nombre Completo:</label>
        <input id="Nombre" name="nombre" class="formulario__input" type="text" placeholder="Aquí tú Nombre" />
      </div>
      <div class="separador">
        <label class="formulario__etiqueta separador" for="Correo">Correo:</label>
        <input id="Correo" name="correo" class="formulario__input" type="email" placeholder="Aquí tú Correo" />
      </div>
      <div class="formulario__textarea--contenedor">
        <label for="Mensaje" class="formulario__etiqueta">Mensaje:</label>
        <textarea id="Mensaje" name="mensaje" class="formulario__textarea" name="mensaje" rows="5" placeholder="Aquí tú Mensaje"></textarea>
      </div>
      <button class="formulario__boton" type="submit">Envíar</button>      
      <?php
      if(!empty($errores)){
        foreach($errores as $error):
        ?>        
        <div class="contenedorAlerta">
          <p class="alerta__mensaje"><?php echo $error ?></p>
        </div>
        <?php
        endforeach;      
      }else if($enviado){
        ?>
        <div class="contenedorAlerta">
          <p class="alerta__mensaje">Envio exitoso</p>
        </div>
        <?php
      }
      ?>
    </form>
  </section>
</main>
<?php
include '../Portafolio/footer.php';
