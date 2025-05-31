/*Api: Random User
Desarrolar buscador personal
Permite ingresar numero entre 2 y 5 
genera tarjeta con informacion de la persona
Mostrar visualmente a las personas mayor de edad
mostrar mensaje error de conexion
*/
let Nombre,Apellido
let Imagen
let Pais, Ciudad
let Edad = 0
let Ingreso = 0



document.getElementById('IngresoUsuario').addEventListener('click',

    async function () {
        let UsuarioUno = document.getElementById('IdUsuario').value.toLowerCase()

        console.log(UsuarioUno)

        await  MuestraUsuario ()
        

       
    })


    async function MuestraUsuario () {
        
        const Ingreso = document.getElementById("IdUsuario").value;
        if (Ingreso >= 2 && Ingreso <=5) {
            PrimerUsuario(Ingreso)
           
               
    } else {
            alert ("Solo se admiten valores entre 2 y 5")
             Nombre = document.getElementById("Nombre").innerHTML= "" ;
            Imagen = document.getElementById("ImagenUsuario").src = "" ;
            Apellido = document.getElementById("Apellido").innerHTML= "" ;
            Edad = document.getElementById("Edad").innerHTML = "";
            Pais = document.getElementById("Pais").innerHTML = "";
            Ciudad = document.getElementById("Ciudad").innerHTML = "";
            
            
        }
    }

     async function PrimerUsuario(IdUsuarioUno) {  
        const response = await fetch(`https://randomuser.me/api/?seed=${IdUsuarioUno}` )
        if (!response.ok) throw new Error("Error en la respuesta del servidor")
         const data = await response.json()

         console.log(data.results)

if (data.results[0].dob.age >= 18) {

        Nombre = document.getElementById("Nombre").innerHTML = "Nombre: "+ data.results[0].name.first;
        Imagen = document.getElementById("ImagenUsuario").src = data.results[0].picture.large;
        Apellido = document.getElementById("Apellido").innerHTML ="Apellido: "+ data.results[0].name.last;
        Edad = document.getElementById("Edad").innerHTML ="Edad: "+ data.results[0].dob.age;
        Pais = document.getElementById("Pais").innerHTML = "Pais: "+ data.results[0].location.country;
        Ciudad = document.getElementById("Ciudad").innerHTML = "Ciudad: "+ data.results[0].location.city;
    
} else {

    alert ("El usuario es menor de edad y sus datos no pueden ser mostrados")
        Nombre = document.getElementById("Nombre").innerHTML = "Nombre: ";
        Imagen = document.getElementById("ImagenUsuario").src =" ";
        Apellido = document.getElementById("Apellido").innerHTML ="Apellido: ";
        Edad = document.getElementById("Edad").innerHTML ="Edad: ";
        Pais = document.getElementById("Pais").innerHTML = "Pais: ";
        Ciudad = document.getElementById("Ciudad").innerHTML = "Ciudad: ";
    
    
}
     }
       window.addEventListener('load', () => {
      if (!navigator.onLine) {
        
        document.body.innerHTML = '';

        
        const mensaje = document.createElement('div');
        mensaje.style.color = 'red';
        mensaje.style.fontSize = '24px';
        mensaje.style.textAlign = 'center';
        mensaje.style.marginTop = '50px';
        mensaje.textContent = ' No hay conexión a internet. Por favor, verifica tu conexión y recarga la página.';
        document.body.appendChild(mensaje);
      }
    });
     
    if (!navigator.onLine) {

    alert("Estás sin conexión a internet.");
    document.getElementById("Error").innerHTML= `Error en este momento no cuenta con conexion a internet`
   }
