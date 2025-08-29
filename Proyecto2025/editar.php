<?php
require_once "User.php";
$user = new User();
$user->update(12, "Dawnin", "Nuñez");
echo "Usuario actualizado.";


?>