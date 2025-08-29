<?php


require_once "User.php";

$user = new User();
$users = $user->getAll();
foreach ($users as $u) {
 echo $u['id'] . " - " . $u['nombre'] . " " . $u['apellido'] . "<br>";
}

$user -> getAll();



?>