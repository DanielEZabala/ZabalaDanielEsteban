<?php

require_once "User.php";

$user = new User();
$users = $user->getAll();

foreach ($users as $u) {
    echo $u['id'] . " - " . $u['first_name'] . " " . $u['last_name'] . " - ";
    echo $u['city'] . ", " . $u['state'] . ", " . $u['country'] . " - ";
    echo "Email: " . $u['email'] . "<br>";
    echo 'Imagen <img src="' . $u['picture_thumbnail'] . '" alt="Foto usuario"> - <br>';
}


?>