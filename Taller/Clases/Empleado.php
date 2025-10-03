<?php
require_once 'Clases\Persona.php';

class Empleado {
    public $puesto;
    public $salario;


        public function __construct (Persona $persona, $puesto, $salario){
            $this -> persona = $persona;
            $this ->puesto =$puesto;
            $this ->salario =$salario;
        }

        public function mostrarDatosEmpleado(){
            echo "<br/>";
            echo "Empleados" . "<h2/>";

            echo "Empleado: " . $this ->persona -> nombre . " ". $this ->persona ->apellido  ;
            echo "<br/>";
            echo "Puesto: " . $this ->puesto;
            echo "<br/>";
            echo "Telefono Empleado: " . $this ->persona -> telefono  ;
            echo "<br/>";
            echo "Salario: " . $this ->salario  ;  
        }


}






?>