<?php
require_once 'checkeo_Session_Admin.php'; // Protección: solo admins logueados

// Conexión a la base de datos
$host = "localhost";
$user = "root";
$pass = "";
$db   = "biblioteca";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("❌ Error de conexión: " . $conn->connect_error);
}

// Consulta de préstamos activos
$sql = "SELECT p.id, u.nombre AS nombre_usuario, u.apellido AS apellido_usuario, 
               l.titulo AS titulo_libro, p.fecha_prestamo, p.fecha_devolucion
        FROM prestamos p
        JOIN usuarios u ON p.id_usuario = u.id
        JOIN libros l ON p.id_libro = l.id
        WHERE p.devuelto = 0
        ORDER BY p.fecha_prestamo DESC";

$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Panel del Administrador</title>
  <style>
    body { font-family: Arial; background: #f4f4f4; margin: 20px; }
    table { border-collapse: collapse; width: 100%; background: white; }
    th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
    th { background: #333; color: white; }
    h2 { color: #333; }
    .btn { padding: 6px 10px; border: none; border-radius: 4px; cursor: pointer; }
    .btn-logout { background: #b32d2e; color: white; }
    .btn-devolucion { background: #2e8b57; color: white; }
  </style>
</head>
<body>

<h2>📘 Panel del Administrador</h2>
<p>Bienvenido, <b><?= htmlspecialchars($_SESSION['admin_user']) ?></b></p>

<a href="Logout.php" class="btn btn-logout">Cerrar sesión</a>
<hr>

<h3>📚 Préstamos activos</h3>

<?php if ($result->num_rows > 0): ?>
  <table>
    <tr>
      <th>ID</th>
      <th>Usuario</th>
      <th>Libro</th>
      <th>Fecha préstamo</th>
      <th>Fecha devolución</th>
      <th>Acción</th>
    </tr>
    <?php while ($row = $result->fetch_assoc()): ?>
      <tr>
        <td><?= $row['id'] ?></td>
        <td><?= htmlspecialchars($row['nombre_usuario'] . " " . $row['apellido_usuario']) ?></td>
        <td><?= htmlspecialchars($row['titulo_libro']) ?></td>
        <td><?= $row['fecha_prestamo'] ?></td>
        <td><?= $row['fecha_devolucion'] ?></td>
        <td>
          <form action="devolver_libro.php" method="POST" style="margin:0;">
            <input type="hidden" name="prestamo_id" value="<?= $row['id'] ?>">
            <button type="submit" class="btn btn-devolucion">Registrar devolución</button>
          </form>
        </td>
      </tr>
    <?php endwhile; ?>
  </table>
<?php else: ?>
  <p>No hay préstamos activos.</p>
<?php endif; ?>

</body>
</html>
<?php
$conn->close();
?>
