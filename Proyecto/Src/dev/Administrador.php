<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "biblioteca";

// Conexión
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("❌ Error de conexión: " . $conn->connect_error);
}

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo "Acceso no válido.";
    exit;
}

// Recibir y sanitizar
$usuario = trim($_POST['usuario'] ?? '');
$contraseña = $_POST['contraseña'] ?? '';
$confirm = $_POST['confirm_contraseña'] ?? '';

// Validaciones básicas
if ($usuario === '' || $contraseña === '' || $confirm === '') {
    die("⚠️ Debe completar todos los campos.");
}
if ($contraseña !== $confirm) {
    die("⚠️ Las contraseñas no coinciden.");
}
if (strlen($contraseña) < 6) {
    die("⚠️ La contraseña debe tener al menos 6 caracteres.");
}

// Verificar si el usuario ya existe
$stmt = $conn->prepare("SELECT id FROM administradores WHERE usuario = ?");
$stmt->bind_param("s", $usuario);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows > 0) {
    $stmt->close();
    die("⚠️ Ese usuario ya existe. Elija otro nombre.");
}
$stmt->close();

// Hashear la contraseña
$hash = password_hash($contraseña, PASSWORD_DEFAULT);

// Insertar admin
$stmt = $conn->prepare("INSERT INTO administradores (usuario, contraseña) VALUES (?, ?)");
$stmt->bind_param("ss", $usuario, $hash);
if ($stmt->execute()) {
    echo "✅ Administrador creado correctamente. Usuario: <b>" . htmlspecialchars($usuario) . "</b><br>";
} else {
    echo "⚠️ Error al crear administrador: " . $conn->error;
}
$stmt->close();
$conn->close();
?>
