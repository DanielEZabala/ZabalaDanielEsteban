<?php
// Inicia o continúa la sesión
session_start();

// Verifica si existe una sesión de administrador activa
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    // Si no hay sesión, redirige al login
    header("Location: loginAdmin.html");
    exit();
}
?>
