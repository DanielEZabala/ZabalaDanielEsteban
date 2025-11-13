<?php
// --- Conexión a la base de datos ---
$conn = new mysqli("localhost", "root", "", "biblioteca");
if ($conn->connect_error) {
    die("Error: " . $conn->connect_error);
}

// --- Consultar si ya hay un administrador registrado ---
$sql = "SELECT COUNT(*) AS total FROM administradores";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$tieneAdmin = ($row['total'] > 0);

$conn->close();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>📚 Biblioteca El Búho</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f8f8;
            text-align: center;
            padding-top: 50px;
        }
        h2 {
            color: #333;
            margin-top: 10px;
        }
        ul {
            list-style: none;
            padding: 0;
            margin-top: 40px;
        }
        li {
            margin: 10px 0;
        }
        a {
            text-decoration: none;
            background-color: #007BFF;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            transition: background 0.3s;
        }
        a:hover {
            background-color: #0056b3;
        }

        /* ---------- BÚHO CABEZA ---------- */
        .owl-head {
            position: relative;
            width: 140px;
            height: 120px;
            background: #6d4c41;
            border-radius: 70px 70px 60px 60px;
            margin: 0 auto 20px auto;
            animation: headMove 6s ease-in-out infinite;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .ear {
            position: absolute;
            width: 30px;
            height: 40px;
            background: #6d4c41;
            top: -10px;
            border-radius: 10px 10px 0 0;
        }

        .ear.left { left: 0; transform: rotate(-15deg); }
        .ear.right { right: 0; transform: rotate(15deg); }

        .eyes {
            position: absolute;
            top: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 20px;
        }

        .eye {
            width: 45px;
            height: 45px;
            background: #fff;
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .pupil {
            width: 18px;
            height: 18px;
            background: #222;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: lookSide 6s ease-in-out infinite;
        }

        .pupil::after {
            content: "";
            position: absolute;
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            top: 2px;
            left: 3px;
        }

        .beak {
            position: absolute;
            top: 75px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 16px solid #f6b800;
        }

        @keyframes headMove {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(4deg); }
            75% { transform: rotate(-4deg); }
        }

        @keyframes lookSide {
            0%, 100% { transform: translate(-50%, -50%); }
            25% { transform: translate(-60%, -50%); }
            75% { transform: translate(-40%, -50%); }
        }
    </style>
</head>
<body>

<div class="owl-head">
    <div class="ear left"></div>
    <div class="ear right"></div>
    <div class="eyes">
        <div class="eye"><div class="pupil"></div></div>
        <div class="eye"><div class="pupil"></div></div>
    </div>
    <div class="beak"></div>
</div>

<h2>📚 Biblioteca El Búho</h2>

<ul>
  <li><a href="view/formularioUsuario.html">🧾 Registrarse como usuario</a></li>
  <li><a href="view/solicitudPrestamo.html">📖 Solicitar préstamo</a></li>
  <li><a href="view/loginAdmin.html">🔐 Ingreso Administrador</a></li>

  <?php if (!$tieneAdmin): ?>
      <li><a href="view/registrarAdministrador.html" style="background-color:#28a745;">➕ Crear Administrador</a></li>
  <?php endif; ?>
</ul>

</body>
</html>