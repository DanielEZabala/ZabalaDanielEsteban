<?php
class Producto{
    public $nombre;
    public $precio;
    public $categoria;
    public $marcas =[];
    public $marcas_Validas =["Kodak","Lenovo","Mac","Intel"];
    public $anio_Creacion;
        public function __construct($nombre,$precio,$categoria, $marcas, DateTime $anio_Creacion){
            if (empty($nombre) || empty($categoria)) {
                throw new Exception("Nombre y Categoria del Producto Obligatorio."); 
            }
            if (empty($marcas) || empty(array_filter($marcas, fn($m) => trim($m) !== ""))) {
            throw new Exception("El producto debe tener al menos una marca válida (no vacía ni con solo espacios).");
        }
            if ($precio <= 0) {
                throw new Exception("Precio no puede ser menor o igual a 0");
            }
        $this->nombre=$nombre;
        $this->precio=$precio;
        $this->categoria=$categoria;
        $this->marcas=$marcas;
        $this->anio_Creacion=$anio_Creacion;
        
        }
        public function getInfo(){
             $this->deteccionMarcas();
            return "\n Producto: {$this->nombre}".
            "\n Categoria: {$this->categoria}".
            "\n Precio: $" . number_format($this->precio ,2).
            "\n Marcas: " . $this->ordenProductos().
            "\n" .$this->getEdad() . "Años"; 
        }
        public function ordenProductos(){
            return implode("," , $this->marcas);
        }
        public function deteccionMarcas(){
            foreach ($this->marcas as $marca){
                if (!in_array($marca, $this->marcas_Validas)) {
                 throw new Exception("La marca '$marca' no es Legal.");
                }
            }
        }
        public function getEdad(){
            $hoy = new DateTime;
            $edad = $hoy->diff($this->anio_Creacion)->y;
            return $edad;

        }



}

?>