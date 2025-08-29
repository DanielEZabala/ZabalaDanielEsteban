<?php
require_once "User.php";
$user = new User();
$user->update(2, "Dawnin", "Nuñez");
echo "Usuario actualizado.";


?>