<?php
require_once 'checkeo_Session_Admin.php'; // solo el admin accede

// Conexión a la base de datos
$host = "localhost";
$user = "root";
$pass = "";
$db   = "biblioteca";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("❌ Error de conexión: " . $conn->connect_error);
}

// Capturar y limpiar datos
$titulo    = trim($_POST['titulo']);
$anio      = intval(trim($_POST['anio']));
$autor     = trim($_POST['autor']);
$categoria = trim($_POST['categoria']);
$editorial = trim($_POST['editorial']);
$stock     = intval(trim($_POST['stock']));

// Validaciones
if(empty($titulo) || empty($anio) || empty($autor) || empty($categoria) || empty($editorial)) {
    die("⚠️ Todos los campos son obligatorios.<br><a href='../dev/formularioLibro.html'>Volver</a>");
}

if($stock <= 0) {
    die("⚠️ El stock debe ser mayor a 0.<br><a href='../dev/formularioLibro.html'>Volver</a>");
}

// Insertar en la base de datos
$stmt = $conn->prepare("INSERT INTO libros (titulo, anio, autor, categoria, editorial, stock) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sisssi", $titulo, $anio, $autor, $categoria, $editorial, $stock);

if($stmt->execute()) {
    echo "✅ Libro registrado correctamente.<br>";
    echo "<a href='../dev/PanelAdmin.php'>Volver al panel</a>";
} else {
    echo "⚠️ Error al registrar libro: " . $conn->error;
}

$stmt->close();
$conn->close();
?>