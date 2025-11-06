<?php
// Conexión a la base de datos

$host = "localhost";
$user = "root";  // cámbialo si tu usuario es otro
$pass = "";      // coloca tu contraseña si tienes
$db   = "biblioteca";

$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("❌ Error de conexión: " . $conn->connect_error);
}


$nombre    = trim($_POST['nombre']);
$apellido  = trim($_POST['apellido']);
$dni       = trim($_POST['dni']);
$correo_electronico     = trim($_POST['correo_electronico']);
$telefono  =trim($_POST['telefono']);
$direccion = trim($_POST['direccion']);

//Controla si los campos han sido completados
if (empty($nombre) || empty($apellido) || empty($dni) || empty($correo_electronico) || empty($telefono) || empty($direccion)) {
    die("⚠️ Error: Todos los campos son obligatorios y no pueden estar vacíos o solo con espacios en blanco.
    <br><a href='..\index.php'>Volver al inicio</a>");
}

// Insertar en la base de datos
$sql = "INSERT INTO usuarios (nombre, apellido, dni, correo_electronico, telefono, direccion) 
        VALUES ('$nombre', '$apellido','$dni' ,'$correo_electronico', '$telefono', '$direccion')";

if ($conn->query($sql) === TRUE) {
    echo "✅ Usuario registrado correctamente";
    echo "<br><a href='..\index.php'>Volver al inicio</a>";
} else {
    echo "⚠️ Error: " . $conn->error;
}

$conn->close();
?>