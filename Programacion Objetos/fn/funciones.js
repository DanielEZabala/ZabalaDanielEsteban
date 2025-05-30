/*class Animal{

    Nombre = 'Koko';
    Raza = 'Felino';
    Edad = 4;
    
   
    HaceRuido(){

        return "Miau"
    };
    Camina(){};
    EstadoSalud(){};
    GetInfo(){};

}

const Gato = new Animal();
console.log(Gato.Nombre)
console.log(Gato.HaceRuido())
document.getElementById("Pantalla").innerHTML= Gato.HaceRuido()

Gato.Nombre = 'koquito';
console.log(Gato.Nombre)


let Gato1 = new Animal();
Gato1.Nombre ='Garfield'
console.log(Gato1.Nombre)

*/ 
class Animal{
name ;
raza ;


constructor(name, raza){

this.name = name;
this.raza = raza;

}}

let Gato = new Animal("Koko", "Felino");
let Perro = new Animal ("Rocco", "Canino");

console.log(Gato.name +" "+ Gato.raza )
