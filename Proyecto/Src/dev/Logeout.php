<?php
//Cierre de sesión del administrador
session_start();

// Borrar todas las variables de sesión
$_SESSION = [];

// Eliminar la cookie de sesión 
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params["path"],
        $params["domain"],
        $params["secure"],
        $params["httponly"]
    );
}

// Destruir la sesión completamente
session_destroy();

// Redirigir de vuelta al login del administrador
header("Location: ../view/loginAdmin.html");
exit;

?>
