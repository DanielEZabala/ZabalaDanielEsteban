<?php
class Vehiculo{
    public $marca; 
    public $modelo;
    public $anio;
    public $patente;
    public $propietario;


        public function __construct (Cliente $propietario, $marca, $modelo, $anio, $patente){
                $this -> propietario = $propietario;
                $this -> marca = $marca;
                $this -> modelo = $modelo;
                $this -> anio = $anio;
                $this -> patente = $patente;
            
        }

            public function mostrarVehiculo(){
                echo "Vehiculo" . "<h1/>"



            }


}




?>