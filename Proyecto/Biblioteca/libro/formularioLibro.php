<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registrar Libro</title>
</head>
<body>
    <h2>📖 Registro de Libro</h2>
    <form action="Libro.php" method="POST">
        <label>Título:</label><br>
        <input type="text" name="titulo" required><br><br>

        <label>Año:</label><br>
        <input type="number" name="anio" min="1000" max="9999" required><br><br>

        <label>Autor:</label><br>
        <input type="text" name="autor" required><br><br>

        <label>Categoría:</label><br>
        <input type="text" name="categoria" required><br><br>

        <label>Editorial:</label><br>
        <input type="text" name="editorial" required><br><br>

        <label>Stock:</label><br>
        <input type="number" name="stock" min="1" value="1" required><br><br>

        <button type="submit">Registrar Libro</button>
    </form>
</body>
</html>