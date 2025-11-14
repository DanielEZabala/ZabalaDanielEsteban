<?php
class ProductoImportado extends Producto{
        public $impuesto;
         public $marcas_Validas =["Balbo","MalBeck","Toro"];

        public function __construct($nombre,$precio,$categoria,$marcas,$impuesto,$anio_Creacion){
            if ($impuesto < 0) {
                throw new Exception("Impuesto no puede ser menor a 0");
            }
            if (empty($marcas) || empty(array_filter($marcas, fn($m) => trim($m) !== ""))) {
            throw new Exception("El producto debe tener al menos una marca válida (no vacía ni con solo espacios).");
        }
            parent::__construct($nombre,$precio,$categoria,$marcas,$anio_Creacion);
            $this->impuesto=$impuesto;
        }
        public function getInfo(){
            $this->deteccionMarcas();
            return "\n Producto: {$this->nombre}".
            "\n Categoria: {$this->categoria}".
            "\n Precio: $" . $this->calculoImpuesto().
            "\n Marcas: " . $this->ordenProductos().
            "\n" .$this->getEdad(). "Años"; 
        }

        public function calculoImpuesto(){
            $precioFinal = $this -> precio +($this->precio * $this-> impuesto/100);
            return number_format($precioFinal,2) . " Con impuestos";
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