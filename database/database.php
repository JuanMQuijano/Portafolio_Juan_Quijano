<?php
    function conectarDB(){
        $db = mysqli_connect('localhost','root','Juanma20Quijano2','portafolio');

        if(!$db){
            echo 'Error';
            exit;
        }

        return $db;
    }
?>