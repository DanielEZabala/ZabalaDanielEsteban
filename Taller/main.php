<?php
require_once 'Clases\Cliente.php';
require_once 'Clases\Persona.php';
require_once 'Clases\Empleado.php';

$persona1 = new Persona ("Daniel", "Zabala", "+543446123456");
$persona1 -> mostrarInformacion();
$cliente1 = new Cliente ( $persona1, "dzz@gmail.com" , date ("02-10-2025") );
$cliente1 ->mostrarDatos();


$persona2 = new Persona ("Carlos", "Martinez", "(011) 23456789");
$empledo1 = new Empleado ($persona2 , "Mecanico Junior", "$45000");
$empledo1 ->mostrarDatosEmpleado();

?>