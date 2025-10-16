<?php

require_once 'Clases\Empleado.php';
class Desarrollador extends Empleado {
     use CalcularEdad;
       public $empleado;
public function __construct(Empleado $empleado){
    $this->empleado = $empleado;
}
public function mostrarInfo(){
    echo "Nombre: " . $this ->empleado->nombre ." \n";
    echo "Edad: " . $this->empleado->edad ." \n";
    echo "Cargo: " . __CLASS__ ." \n";
    echo $this -> calcularNacimiento( $this -> empleado -> edad);

}

}

?>
