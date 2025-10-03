<?php
require_once 'Clases\Persona.php';

class Cliente {
public $email;
public $fechaRegistro;


public function __construct (Persona $persona, $email, $fechaRegistro){
    $this -> persona = $persona;
    $this -> email = $email;
    $this ->fechaRegistro = $fechaRegistro;
}

public function  mostrarDatos(){
   
    echo "<br/> ";
    echo "Email: ". $this -> email;
    echo "<br/> ";
    echo "Fecha Registro: " . $this -> fechaRegistro ;
    echo "<br/>";
   
    
}




}


?>