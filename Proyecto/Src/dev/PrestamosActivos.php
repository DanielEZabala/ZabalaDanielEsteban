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

// Consulta con JOIN para mostrar préstamos con nombre de usuario y título de libro
$sql = "SELECT p.id AS id_prestamo, u.nombre, u.apellido, l.titulo, p.fecha_prestamo, p.fecha_devolucion
        FROM prestamos p
        JOIN usuarios u ON p.id_usuario = u.id
        JOIN libros l ON p.id_libro = l.id
        ORDER BY p.fecha_prestamo DESC";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2>Préstamos registrados</h2>";
    echo "<table border='1' cellpadding='5'>";
    echo "<tr><th>ID</th><th>Usuario</th><th>Libro</th><th>Fecha de Préstamo</th><th>Fecha de Devolución</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id_prestamo']}</td>
                <td>{$row['nombre']} {$row['apellido']}</td>
                <td>{$row['titulo']}</td>
                <td>{$row['fecha_prestamo']}</td>
                <td>{$row['fecha_devolucion']}</td>
              </tr>";
    }
    echo "</table>";
    echo "<br><a href='..\index.php'>Volver al inicio</a>";
} else {
    echo "No hay préstamos registrados.";
}

$conn->close();
?>