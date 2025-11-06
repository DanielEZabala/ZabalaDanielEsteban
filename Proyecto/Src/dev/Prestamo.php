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
$dni        = $_POST['dni'];
$libro_id   = $_POST['libro_id'];
$nombre     = $_POST['nombre'] ?? '';
$apellido   = $_POST['apellido'] ?? '';
$correo_electronico     = $_POST['correo_electronico'] ?? '';
$telefono   = $_POST['telefono'] ?? '';
$direccion  = $_POST['direccion'] ?? '';

// 1. Verificar stock del libro
$sqlStock = "SELECT stock FROM libros WHERE id = '$libro_id'";
$result   = $conn->query($sqlStock);

if ($result->num_rows == 0) {
    die("⚠️ El libro solicitado no existe.");
}

$row   = $result->fetch_assoc();
$stock = $row['stock'];

if ($stock <= 0) {
    die("❌ No hay stock disponible para este libro.");
}

// 2. Registrar usuario (si no existe por DNI)
$sqlUser = "SELECT id FROM usuarios WHERE dni = '$dni'";
$result  = $conn->query($sqlUser);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $usuario_id = $row['id'];

} else {
    $sqlInsertUser = "INSERT INTO usuarios (nombre, apellido, dni, correo_electronico, telefono, direccion)
                      VALUES ('$nombre', '$apellido', '$dni', '$correo_electronico', '$telefono', '$direccion')";
    if ($conn->query($sqlInsertUser) === TRUE) {
        $usuario_id = $conn->insert_id;
    } else {
        die("⚠️ Error al registrar usuario: " . $conn->error);
    }
}

// 3. Registrar préstamo
$fecha_prestamo   = date("Y-m-d");
$fecha_devolucion = date("Y-m-d", strtotime("+14 days"));

$resultLibro = $conn->query("SELECT titulo FROM libros WHERE id = '$libro_id'");
$rowLibro = $resultLibro->fetch_assoc();
$titulo_libro = $rowLibro['titulo'];

$sqlPrestamo = "INSERT INTO prestamos (id_usuario, id_libro, dni_usuario, titulo_libro, fecha_prestamo, fecha_devolucion)
                VALUES ('$usuario_id', '$libro_id', '$dni', '$titulo_libro', '$fecha_prestamo', '$fecha_devolucion')";

if ($conn->query($sqlPrestamo) === TRUE) {
    // 4. Descontar stock del libro
    $conn->query("UPDATE libros SET stock = stock - 1 WHERE id = '$libro_id'");
    
    echo "✅ Préstamo registrado correctamente.";
    echo "<br>📅 Fecha de devolución: <b>$fecha_devolucion</b>";
    echo "<br><a href='../index.php'>Volver al inicio</a>";
} else {
    echo "⚠️ Error al registrar préstamo: " . $conn->error;
}

$conn->close();
?>
