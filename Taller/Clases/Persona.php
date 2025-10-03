<?php

class Persona {
    public $nombre;
    public $apellido;
    public $telefono;
    
public function __construct ($nombre, $apellido, $telefono){
    $this -> nombre = $nombre;
    $this -> apellido = $apellido;
    $this -> telefono = $telefono;
}

public function mostrarInformacion(){
    echo("Cliente" . "<h2/>" );
    echo ("Cliente: " . $this -> nombre . "  " . $this -> apellido );
    echo "<br/>";
    echo (" Telefono: " . $this -> telefono ) ;

}

}




?>