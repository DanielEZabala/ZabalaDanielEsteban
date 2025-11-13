<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

$host = "localhost";
$user = "root";
$pass = "";
$db   = "biblioteca";

// Conexión
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("❌ Error de conexión: " . $conn->connect_error);
}

// Solo aceptar método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: ../view/loginAdmin.html");
    exit;
}

// limpia la entrada
$usuario = trim($_POST['usuario'] ?? '');
$contraseña = $_POST['contraseña'] ?? '';

if ($usuario === '' || $contraseña === '') {
    die("⚠️ Debes completar usuario y contraseña.");
}

// Buscar admin
$stmt = $conn->prepare("SELECT id, usuario, contraseña FROM administradores WHERE usuario = ?");
$stmt->bind_param("s", $usuario);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    die("Usuario o contraseña incorrectos.");
}

$admin = $result->fetch_assoc();
$stmt->close();

// Verificar contraseña
if (password_verify($contraseña, $admin['contraseña'])) {
    session_regenerate_id(true);
    $_SESSION['admin_id']   = $admin['id'];
    $_SESSION['admin_user'] = $admin['usuario'];
    $_SESSION['admin_login_time'] = time();

    header("Location:PanelAdmin.php");
    exit;
} else {
    die("Usuario o contraseña incorrectos.");
}
?>
