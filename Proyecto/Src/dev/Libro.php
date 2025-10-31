<?php
// Conexión a la base de datos
$host = "localhost";
$user = "root";    // tu usuario de MySQL
$pass = "";        // tu contraseña
$db   = "biblioteca";

$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("❌ Error de conexión: " . $conn->connect_error);
}

// Capturar datos del formulario
$titulo    = $_POST['titulo'];
$anio      = $_POST['anio'];
$autor     = $_POST['autor'];
$categoria = $_POST['categoria'];
$editorial = $_POST['editorial'];
$stock     = $_POST['stock'];

// Insertar en la base de datos
$sql = "INSERT INTO libros (titulo, anio, autor, categoria, editorial, stock)
        VALUES ('$titulo', '$anio', '$autor', '$categoria', '$editorial', '$stock')";

if ($conn->query($sql) === TRUE) {
    echo "✅ Libro registrado correctamente";
    echo "<br><a href='/index.php'>Registrar otro libro</a>";
} else {
    echo "⚠️ Error: " . $conn->error;
}

$conn->close();
?>