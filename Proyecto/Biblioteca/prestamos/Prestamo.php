<?php
// Conexión a la base de datos
$host = "localhost";
$user = "root";
$pass = "";
$db   = "biblioteca";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("❌ Error de conexión: " . $conn->connect_error);
}

// Capturar datos del formulario
$nombre    = $_POST['nombre'];
$apellido  = $_POST['apellido'];
$email     = $_POST['email'];
$telefono  = $_POST['telefono'];
$direccion = $_POST['direccion'];
$libro_id  = $_POST['libro_id'];

// 1. Verificar stock del libro
$sqlStock = "SELECT stock FROM libros WHERE id_libro = '$libro_id'";
$result   = $conn->query($sqlStock);

if ($result->num_rows == 0) {
    die("⚠️ El libro solicitado no existe.");
}

$row   = $result->fetch_assoc();
$stock = $row['stock'];

if ($stock <= 0) {
    die("❌ No hay stock disponible para este libro.");
}

// 2. Registrar usuario (si no existe por email)
$sqlUser = "SELECT id_usuario FROM usuarios WHERE email = '$email'";
$result  = $conn->query($sqlUser);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $usuario_id = $row['id_usuario'];
} else {
    $sqlInsertUser = "INSERT INTO usuarios (nombre, apellido, email, telefono, direccion)
                      VALUES ('$nombre', '$apellido', '$email', '$telefono', '$direccion')";
    if ($conn->query($sqlInsertUser) === TRUE) {
        $usuario_id = $conn->insert_id;
    } else {
        die("⚠️ Error al registrar usuario: " . $conn->error);
    }
}

// 3. Registrar préstamo
$fecha_prestamo   = date("Y-m-d");
$fecha_devolucion = date("Y-m-d", strtotime("+15 days"));

$sqlPrestamo = $sqlPrestamo = "INSERT INTO prestamos (id_usuario, id_libro, fecha_prestamo, fecha_devolucion)
                VALUES ('$usuario_id', '$libro_id', '$fecha_prestamo', '$fecha_devolucion')";

if ($conn->query($sqlPrestamo) === TRUE) {
    // 4. Descontar stock del libro
    $conn->query("UPDATE libros SET stock = stock - 1 WHERE id_libro = '$libro_id'");
    
    echo "✅ Préstamo registrado correctamente.";
    echo "<br>📅 Fecha de devolución: <b>$fecha_devolucion</b>";
    echo "<br><a href='/index.php'>Registrar otro préstamo</a>";
} else {
    echo "⚠️ Error al registrar préstamo: " . $conn->error;
}

$conn->close();
?>
