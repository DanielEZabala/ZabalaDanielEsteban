<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>📖 Registrar Libro</title>
    <style>
        body {
            font-family: Arial;
            background-color: #f8f8f8;
            text-align: center;
            padding-top: 50px;
        }
        h2 {
            color: #333;
        }
        form {
            background: #fff;
            display: inline-block;
            padding: 20px 30px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        label {
            display: block;
            margin-top: 10px;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 5px 10px;
            margin-top: 5px;
            border-radius: 4px;
            border: 1px solid #ccc;
        }
        button {
            margin-top: 15px;
            padding: 8px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .btn-volver {
            display: inline-block;
            margin-top: 15px;
            text-decoration: none;
            color: white;
            background-color: #28a745;
            padding: 8px 15px;
            border-radius: 50px;
        }
    </style>
</head>
<body>

<h2>📖 Registro de Libro</h2>

<form action="../dev/Libro.php" method="POST">
    <label>Título:</label>
    <input type="text" name="titulo" required>

    <label>Año:</label>
    <input type="number" name="anio" min="1000" max="9999" required>

    <label>Autor:</label>
    <input type="text" name="autor" required>

    <label>Categoría:</label>
    <input type="text" name="categoria" required>

    <label>Editorial:</label>
    <input type="text" name="editorial" required>

    <label>Stock:</label>
    <input type="number" name="stock" min="1" value="1" required>

    <button type="submit">Registrar Libro</button>
</form>

<br>
<a href="../dev/PanelAdmin.php" class="btn-volver">🏠 Volver al panel</a>

</body>
</html>
