<?php

require_once 'Clases\Empleado.php';
require_once 'Clases\Gerente.php';
require_once 'Clases\Desarrollador.php';

$empleado1 = new Empleado ("Laura", 45);
$empleado2 = new Empleado ("Carlos", 30);

$gerente1 = new Gerente ($empleado1);
$desarrollador1 = new Desarrollador ($empleado2);

$gerente1 -> mostrarInfo();
$desarrollador1 -> mostrarInfo();

?>