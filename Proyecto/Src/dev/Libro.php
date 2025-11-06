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
$titulo    = trim($_POST['titulo']);
$anio      = trim($_POST['anio']);
$autor     = trim($_POST['autor']);
$categoria = trim($_POST['categoria']);
$editorial = trim($_POST['editorial']);
$stock     = trim($_POST['stock']);

if(empty($titulo)|| empty($anio)||empty($autor)||empty($categoria)||empty($editorial)) {
    die("⚠️ Error: Todos los campos son obligatorios y no pueden estar vacíos o solo con espacios en blanco.
    <br><a href='..\index.php'>Volver al inicio</a>");
}


//controla stock
if ($stock <= 0) {
    die("⚠️ Error: el stock debe ser mayor a 0.");
}

// Insertar en la base de datos
$sql = "INSERT INTO libros (titulo, anio, autor, categoria, editorial, stock)
        VALUES ('$titulo', '$anio', '$autor', '$categoria', '$editorial', '$stock')";

if ($conn->query($sql) === TRUE) {
    echo "✅ Libro registrado correctamente";
    echo "<br><a href='..\index.php'>Volver al inicio</a>";
} else {
    echo "⚠️ Error: " . $conn->error;
}

$conn->close();
?>