<?php
 echo "<br><a href='view/formularioUsuario.html'>Registrar Usuario</a>";
 echo "<br><a href='view/formularioLibro.html'>Registrar Libro</a>";
 echo "<br><a href='view/solicitudPrestamo.html'>Solicitar Prestamo de Libro</a>";
 echo "<br><a href='dev/prestamosActivos.php'>Libros Prestados</a>";


$conn = new mysqli("localhost", "root", "", "biblioteca");
if ($conn->connect_error) die("Error: " . $conn->connect_error);
$sql = "SELECT COUNT(*) AS total FROM administradores";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if ($row['total'] == 0) {
    echo "<br><a href='view/registrarAdministrador.html'>Crear Administrador</a>";
}
$conn->close();

echo "<br><a href='view/loginAdmin.html'>Iniciar Sesion</a>";

?>

 