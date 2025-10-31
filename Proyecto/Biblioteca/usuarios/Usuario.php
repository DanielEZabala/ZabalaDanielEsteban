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


$nombre    = $_POST['nombre'];
$apellido  = $_POST['apellido'];
$dni       = $_POST['dni'];
$email     = $_POST['email'];
$telefono  = $_POST['telefono'];
$direccion = $_POST['direccion'];

// Insertar en la base de datos
$sql = "INSERT INTO usuarios (nombre, apellido,dni, email, telefono, direccion) 
        VALUES ('$nombre', '$apellido','$dni ,'$email', '$telefono', '$direccion')";

if ($conn->query($sql) === TRUE) {
    echo "✅ Usuario registrado correctamente";
    echo "<br><a href='/index.php'>Registrar otro usuario</a>";
} else {
    echo "⚠️ Error: " . $conn->error;
}

$conn->close();
?>