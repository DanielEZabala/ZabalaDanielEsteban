<?php
require_once 'Checkeo_Session_Admin.php';

// Validar que llegue el ID del préstamo
if (!isset($_POST['prestamo_id'])) {
    echo "<h3 style='color:red;text-align:center;'>❌ No se recibió el ID del préstamo.</h3>";
    echo "<a href='../view/PanelAdmin.php'>Volver</a>";
    exit;
}

$id_prestamo = intval($_POST['prestamo_id']);

$conn = new mysqli("localhost", "root", "", "biblioteca");
if ($conn->connect_error) die("Error: " . $conn->connect_error);

// Buscar el préstamo y su libro
$sql = "SELECT id_libro FROM prestamos WHERE id = ? AND devuelto = 0";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id_prestamo);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo "<h3 style='color:red;text-align:center;'>⚠️ No se encontró el préstamo o ya fue devuelto.</h3>";
    echo "<a href='../view/PanelAdmin.php'>Volver</a>";
    exit;
}

$row = $result->fetch_assoc();
$id_libro = $row['id_libro'];

//  Marcar préstamo como devuelto
$sqlUpdatePrestamo = "UPDATE prestamos SET devuelto = 1, estado = 'devuelto' WHERE id = ?";
$stmt = $conn->prepare($sqlUpdatePrestamo);
$stmt->bind_param("i", $id_prestamo);
$stmt->execute();

// Aumentar stock del libro
$sqlUpdateLibro = "UPDATE libros SET stock = stock + 1 WHERE id = ?";
$stmt = $conn->prepare($sqlUpdateLibro);
$stmt->bind_param("i", $id_libro);
$stmt->execute();

echo "<h3 style='color:green;text-align:center;'>✅ Libro devuelto correctamente.</h3>";
echo "<a href='PanelAdmin.php'>🏠 Volver al panel</a>";

$conn->close();
?>
