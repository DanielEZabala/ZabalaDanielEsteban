<?php
trait CalcularEdad {

    function calcularNacimiento($edad){
        $añoNacimiento = date('Y') - $edad;
        echo "Este " . __CLASS__ . " nacio en el año: " . $añoNacimiento;



    }



}


?>