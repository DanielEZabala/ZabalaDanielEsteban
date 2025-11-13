<?php
require_once 'Checkeo_Session_Admin.php';

$conn = new mysqli("localhost", "root", "", "biblioteca");
if ($conn->connect_error) die("Error: " . $conn->connect_error);

$result = $conn->query("SELECT id, titulo, stock FROM libros");
?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>📚 Libros</title>
<style>
    body {
        font-family: "Segoe UI", Arial, sans-serif;
        background-color: #f2f6f9;
        margin: 0;
        padding: 20px;
        text-align: center;
        color: #333;
    }

    h2 {
        color: #2c3e50;
        font-size: 28px;
        margin-bottom: 25px;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    table {
        margin: 0 auto;
        border-collapse: collapse;
        width: 80%;
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        overflow: hidden;
    }

    th {
        background-color: #007BFF;
        color: white;
        padding: 12px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
    }

    td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    tr:hover {
        background-color: #f1f9ff;
    }

    .stock-bajo {
        color: #e74c3c;
        font-weight: bold;
    }

    .stock-normal {
        color: #2ecc71;
        font-weight: bold;
    }

    .btn-volver {
        display: inline-block;
        margin-top: 30px;
        text-decoration: none;
        background-color: #28a745;
        color: white;
        padding: 10px 18px;
        border-radius: 6px;
        transition: background 0.3s;
        font-size: 15px;
        font-weight: bold;
    }

    .btn-volver:hover {
        background-color: #218838;
    }
</style>
</head>
<body>

<h2>📚 Lista de Libros y Stock</h2>

<table>
    <tr>
        <th>ID</th>
        <th>Título</th>
        <th>Stock</th>
    </tr>
    <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?= $row['id'] ?></td>
            <td><?= htmlspecialchars($row['titulo']) ?></td>
            <td class="<?= ($row['stock'] <= 1) ? 'stock-bajo' : 'stock-normal' ?>">
                <?= $row['stock'] ?>
            </td>
        </tr>
    <?php endwhile; ?>
</table>

<a href="PanelAdmin.php" class="btn-volver">🏠 Volver al Panel</a>

</body>
</html>
<?php
$conn->close();
?>
