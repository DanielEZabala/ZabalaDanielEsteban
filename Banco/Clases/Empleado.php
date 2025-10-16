<?php

require_once 'trait\calcularEdad.php';
    class Empleado {
        use CalcularEdad;
        public $edad;
        public $nombre;

        public function __construct ($nombre , $edad){
            $this ->nombre = $nombre;
            $this ->edad = $edad;
        }
       
    }



?>