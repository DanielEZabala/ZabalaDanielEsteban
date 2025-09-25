<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registrar Libro</title>
</head>
<body>
        <h2>📚 Solicitud de Préstamo</h2>
<form action="Prestamo.php" method="POST">
    <label>Nombre:</label><br>
    <input type="text" name="nombre" required><br><br>

    <label>Apellido:</label><br>
    <input type="text" name="apellido" required><br><br>

    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>

    <label>Teléfono:</label><br>
    <input type="text" name="telefono" required><br><br>

    <label>Dirección:</label><br>
    <input type="text" name="direccion" required><br><br>

    <label>ID del Libro:</label><br>
    <input type="number" name="libro_id" min="1" required><br><br>

    <button type="submit">Solicitar Préstamo</button>
</form>

    </form>
</body>
</html>