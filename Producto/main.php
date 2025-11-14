<?php
require_once 'clases\producto.php';
require_once 'clases\productoImportado.php';

try {
    $producto1= new Producto ("Laptop", 600000 ,"Electonica",["Lenovo", "Mac", "Intel", "Kodak"], new DateTime("2024-06-24"));
    $productoImpor = new ProductoImportado("Vino" , 120000 , " bebida", ["Balbo","MalBeck","Toro"], 10, new DateTime("1950-05-12"));
    echo $producto1->getInfo() ."\n";
    echo $productoImpor ->getInfo()."\n";
} catch (Exception $e) {
    echo " ERROR ", $e->getMessage();
}




?>