/*
funcion que cuente y muestre cuantas personas hay
2 funcion que regrese la cantidad de personas === gender === male
3 funcion que regrese la cantidad de personas === gender === female
4 funcion que devuelva promedio de edad
5 funcion que cuente la cantidad de menores de edad <= 28
*/

const datos = 'datos\\datos.json';
        let cantidadHombres = 0;
        let cantidadMujeres = 0;
        let sumaEdades = 0;
        let edadTotales = 0;
        let promedioEdades = 0; 
        let menoresEdad = 0;
        let mayorEdad= 0;
        let nombrePersonaMayor;
        let fotoPersonaMayor;
        let menorEdad = 1000;
        let nombrePersonaMenor;
        let fotoPersonaMenor;
        let resultados ;


            async function  personas(Url) {
                    const response = await fetch(Url);
                    const data = await response.json();

                    const Usuarios  = await data.results

            console.log(`La cantidad de personas en el archivo es: ${Usuarios.length}`)
            document.getElementById('Usuarios').innerHTML= `La cantidad de Personas es: ${Usuarios.length}`


                    usuariosHombres(Usuarios)
                    usuariosMujeres(Usuarios) 
                    promedioDeEdades(Usuarios)
                    menoresDeEdad(Usuarios)
                    personaMasEdad(Usuarios)
                    personaMenosEdad(Usuarios)
                    paisMasRepetido(Usuarios)
                    ciudadMasRepetida(Usuarios)
                    nombreMasRepetido(Usuarios)
            }
            console.log(personas(datos))


            function usuariosHombres(Usuarios) {

                    for (let i = 0; i < Usuarios.length; i++) {
                        if (Usuarios[i].gender === "male") {
                                    cantidadHombres = cantidadHombres+1    
                                // nombrehombres = nombrehombres + "  "+ Usuarios.name.first
                                }
                        
                    }
                        console.log(`La cantidad de hombres es: ${cantidadHombres}`)
                        document.getElementById('Hombres').innerHTML= `La cantidad de Hombres es: ${cantidadHombres}`
            
            }

        function usuariosMujeres(Usuarios) {
        
        for (let i = 0; i < Usuarios.length; i++) {
            if (Usuarios[i].gender === "female") {
                                cantidadMujeres = cantidadMujeres+1    
                            }
        }
            console.log(`La cantidad de mujeres es: ${cantidadMujeres}`)  
            document.getElementById('Mujeres').innerHTML= `La cantidad de Mujeres es: ${cantidadMujeres}`
        }

        function promedioDeEdades(Usuarios) {
            
            for (let i = 0; i < Usuarios.length; i++) {
                sumaEdades += Usuarios[i].dob.age  
                edadTotales = edadTotales +1
            }
        
            promedioEdades = sumaEdades/edadTotales
                console.log(`El promedio de edad es de: ${promedioEdades}`)
                document.getElementById('Promedio').innerHTML= `El promedio de edad es de: ${promedioEdades}`
        }

        function menoresDeEdad(Usuarios) {
        

            for (let i = 0; i < Usuarios.length; i++) {
                if (Usuarios[i].dob.age <= 28) {
            menoresEdad = menoresEdad+1  
            }
        }
        
        console.log(`La cantidad de menores de edad es: ${menoresEdad} menores`)
        document.getElementById('Menores').innerHTML= `La cantidad de menores de edad es: ${menoresEdad}`
        }

        function personaMasEdad(Usuarios) {

            for (let i = 0; i < Usuarios.length; i++) {
                if (Usuarios[i].dob.age > mayorEdad) {

                    mayorEdad = Usuarios[i].dob.age
                    nombrePersonaMayor = Usuarios[i].name.first
                    fotoPersonaMayor = Usuarios[i].picture.medium 
                }
            }
            document.getElementById('UsuarioMayor').innerHTML = `La persona de mas Edad es: ${nombrePersonaMayor} con ${mayorEdad} años`
            document.getElementById('UsuarioMayorFoto').src = fotoPersonaMayor
        }
        function personaMenosEdad(Usuarios) {

            for (let i = 0; i < Usuarios.length; i++) {
                if (Usuarios[i].dob.age < menorEdad) {

                    menorEdad = Usuarios[i].dob.age
                    nombrePersonaMenor = Usuarios[i].name.first
                    fotoPersonaMenor = Usuarios[i].picture.medium 
                }
            }
            document.getElementById('UsuarioMenor').innerHTML = `La persona de menos Edad es: ${nombrePersonaMenor} con ${menorEdad} años`
            document.getElementById('UsuarioMenorFoto').src = fotoPersonaMenor
        }

        function paisMasRepetido(Usuarios) {
            let conteo = {};  
            let paisMasFrecuente = ''; 
            let maxFrecuencia = 0; 

            for (let i = 0; i < Usuarios.length; i++) {
                let pais = Usuarios[i].location.country;
        if (conteo[pais]) {
                    conteo[pais]++;
                } else {
                    conteo[pais] = 1;
                }
            }
            for (let pais in conteo) {
                if (conteo[pais] > maxFrecuencia) {
                    maxFrecuencia = conteo[pais];
                    paisMasFrecuente = pais;
                }
            }
            console.log(`El país más repetido es: ${paisMasFrecuente} con ${maxFrecuencia} repeticiones.`);
            document.getElementById('paisMasRepetido').innerHTML= `El país más repetido es: ${paisMasFrecuente} con ${maxFrecuencia} repeticiones.`
        }
    function ciudadMasRepetida(Usuarios) {
         let cuenta = {};  
            let cityMasFrecuente = ''; 
            let maxFrecuencia = 0; 
             for (let i = 0; i < Usuarios.length; i++) {
                let ciudad = Usuarios[i].location.city;
        if (cuenta[ciudad]) {
                    cuenta[ciudad]++;
                } else {
                    cuenta[ciudad] = 1;
                }
            }
            for (let ciudad in cuenta) {
                if (cuenta[ciudad] > maxFrecuencia) {
                    maxFrecuencia = cuenta[ciudad];
                    cityMasFrecuente = ciudad;
            
            }
        }
        console.log(`La ciudad mas repetida es: ${cityMasFrecuente} con ${maxFrecuencia} repeticiones`)
        document.getElementById('ciudadMasRepetida').innerHTML= `La ciudad mas repetida es: ${cityMasFrecuente} con ${maxFrecuencia} repeticiones`
        }

        function nombreMasRepetido(Usuarios) {
                let nombress= {};
                let nombreFrecuen= '';
                let maxFrecue = 0;

                for (let i  = 0; i < Usuarios.length; i++) {
                    let nombres = Usuarios[i].name.first;
                if (nombress[nombres]) {
                    nombress[nombres]++
                } else {
                    nombress[nombres] = 1
                }

                for (let nombres in nombress) {
                    if (nombress[nombres] > maxFrecue) {
                        maxFrecue = nombress[nombres]
                        nombreFrecuen = nombres
                    }   
                }     
                }
                        console.log(`El nombre mas repetido es: ${nombreFrecuen} con ${maxFrecue} apariciones`)
                        document.getElementById('nombreMasRepetido').innerHTML= `El nombre mas repetido es: ${nombreFrecuen} con ${maxFrecue} apariciones`
        }