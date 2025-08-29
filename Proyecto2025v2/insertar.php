<?php
require_once "User.php";

$url = "https://randomuser.me/api/";


$response = file_get_contents($url);


$data = json_decode($response, true);


$randomUser = $data['results'][0];

$user = new User();
$user->add($randomUser);

echo "Usuario insertado con éxito.";




?>