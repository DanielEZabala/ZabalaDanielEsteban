<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registrar Libro</title>
</head>
<body>
    
        <h2>📚 Solicitud de Préstamo</h2>
<form action="Prestamo.php" method="POST">
    <label>DNI:</label><br>
    <input type="text" name="dni" required><br><br>

    <label>ID del Libro:</label><br>
    <input type="number" name="libro_id" min="1" required><br><br>

    <button type="submit">Solicitar Préstamo</button>
</form>

    </form>
</body>
</html>