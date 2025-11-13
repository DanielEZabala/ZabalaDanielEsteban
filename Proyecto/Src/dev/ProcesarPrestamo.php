<?php
// Recibe formulario de solicitud de préstamo
// Conexión a la base de datos
$host = "localhost";
$user = "root";
$pass = "";
$db   = "biblioteca";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) die("❌ Error de conexión: " . $conn->connect_error);

// Capturar datos del formulario
$titulo_libro = trim($_POST['titulo_libro'] ?? '');
$dni          = trim($_POST['dni'] ?? '');
$nombre       = trim($_POST['nombre'] ?? '');
$apellido     = trim($_POST['apellido'] ?? '');
$correo       = trim($_POST['correo_electronico'] ?? '');
$telefono     = trim($_POST['telefono'] ?? '');
$direccion    = trim($_POST['direccion'] ?? '');

// Validar datos mínimos
if ($titulo_libro === '' || $dni === '') {
    die("⚠️ Debes completar el DNI y el título del libro.");
}

// Buscar libro por título
$sqlLibro = "SELECT id, stock FROM libros WHERE titulo = ?";
$stmt = $conn->prepare($sqlLibro);
$stmt->bind_param("s", $titulo_libro);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    die("⚠️ No se encontró ningún libro con ese título.");
}

$libro = $result->fetch_assoc();
$libro_id = $libro['id'];
$stock = $libro['stock'];

// Verificar stock
if ($stock <= 0) {
    die("❌ No hay stock disponible para este libro.");
}

// Buscar usuario por DNI
$sqlUser = "SELECT id FROM usuarios WHERE dni = ?";
$stmt = $conn->prepare($sqlUser);
$stmt->bind_param("s", $dni);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $usuario_id = $result->fetch_assoc()['id'];
} else {
        die("Solo Usuarios registrados, pueden solicitar prestamos: ");
    }


// Registrar préstamo
$fecha_prestamo   = date("Y-m-d");
$fecha_devolucion = date("Y-m-d", strtotime("+14 days"));

$sqlPrestamo = "INSERT INTO prestamos (id_usuario, id_libro, dni_usuario, titulo_libro, fecha_prestamo, fecha_devolucion, devuelto)
                VALUES (?, ?, ?, ?, ?, ?, 0)";
$stmt = $conn->prepare($sqlPrestamo);
$stmt->bind_param("iissss", $usuario_id, $libro_id, $dni, $titulo_libro, $fecha_prestamo, $fecha_devolucion);

if ($stmt->execute()) {
    // Actualizar stock del libro
    $update = $conn->prepare("UPDATE libros SET stock = stock - 1 WHERE id = ?");
    $update->bind_param("i", $libro_id);
    $update->execute();

    echo "✅ Préstamo registrado correctamente.<br>";
    echo "📘 Libro: <b>$titulo_libro</b><br>";
    echo "📅 Fecha de devolución: <b>$fecha_devolucion</b><br>";
    echo "<a href='../index.php'>🏠 Volver al inicio</a>";
} else {
    die("⚠️ Error al registrar préstamo: " . $conn->error);
}

$conn->close();
?>