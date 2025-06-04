const min = 1;
const max =1025;
const cantidad = 6;
const MinDados = 1;
const MaxDados = 6;
let ValorMaximo = 0;
let TiradaNumero = 0; 
let ValorMaximo2 = 0;
let TiradaNumero2 = 0;
let TiradaDado = 0;
let TiradaDado2 = 0;
const numeros = [];
const NumeroTirada = 0;
const NumeroTirada2 = 0;
let NombreUno, NombreDos,NombreTres, NombreCuatro, NombreCinco, NombreSeis;
let ImagenUno, ImagenDos, ImagenTres, ImagenCuatro, ImagenCinco, ImagenSeis;
let AtaqueUno = 0;
let AtaqueDos = 0;
let AtaqueTres = 0;
let AtaqueCuatro = 0;
let AtaqueCinco = 0;
let AtaqueSeis = 0;
let DefensaUno = 0;
let DefensaDos = 0;
let DefensaTres = 0;
let DefensaCuatro = 0;
let DefensaCinco = 0;
let DefensaSeis = 0;
let AtaqueEquipoA = 0;
let AtaqueEquipoB = 0;
let DefensaEquipoA = 0;
let DefensaEquipoB = 0;
let DiferenciaEquipoA = 0;
let DiferenciaEquipoB = 0;


function generarNumerosAleatorios() {
      for (let i = 0; i < cantidad; i++) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numero);
      }
      return numeros;
    }

const NumerosGenerados = generarNumerosAleatorios();
const [PokemonUno, PokemonDos, PokemonTres, PokemonCuatro, PokemonCinco, PokemonSeis] = NumerosGenerados
console.log([PokemonUno, PokemonDos, PokemonTres, PokemonCuatro, PokemonCinco, PokemonSeis])


    
async function PrimerPokemon(IdPokemonUno) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonUno}`);
  const data = await response.json();
  // Asignar el Nombre y la Imagen del Pokémon a las Variables
  NombreUno = data.name;
  ImagenUno = data.sprites.front_default;
  // Actualizar el HTML
  document.getElementById('NombreUno').innerHTML = NombreUno;
  document.getElementById('ImagenUno').src = ImagenUno;
  //Busca y Guarda Valor de Ataque y Defensa
  for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            AtaqueUno = data.stats[i].base_stat;
            document.getElementById(`AtaqueUno`).innerHTML = `Ataque: ${AtaqueUno}`
            
        }
        if (data.stats[i].stat.name === 'defense') { 
           DefensaUno = data.stats[i].base_stat;
           document.getElementById(`DefensaUno`).innerHTML = `Defensa: ${DefensaUno}`
        }
    }
}
async function SegundoPokemon(IdPokemonDos) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonDos}`);
  const data = await response.json();
  // Asignar el nombre y la imagen del Pokémon a las variables
  NombreDos = data.name;
  ImagenDos = data.sprites.front_default;
  // Actualizar el HTML
  document.getElementById('NombreDos').innerHTML = NombreDos;
  document.getElementById('ImagenDos').src = ImagenDos;
   //Busca y Guarda Valor de Ataque y Defensa
  for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            AtaqueDos = data.stats[i].base_stat;
            document.getElementById(`AtaqueDos`).innerHTML = `Ataque: ${AtaqueDos}`
        }
        if (data.stats[i].stat.name === 'defense') { 
           DefensaDos = data.stats[i].base_stat;
            document.getElementById(`DefensaDos`).innerHTML = `Defensa: ${DefensaDos}`
        }
    }
}
async function TercerPokemon(IdPokemonTres) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonTres}`);
  const data = await response.json();
  // Asignar el nombre y la imagen del Pokémon a las variables
  NombreTres = data.name;
  ImagenTres = data.sprites.front_default;
  // Actualizar el HTML
  document.getElementById('NombreTres').innerHTML = NombreTres;
  document.getElementById('ImagenTres').src = ImagenTres;
   //Busca y Guarda Valor de Ataque y Defensa
  for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            AtaqueTres = data.stats[i].base_stat;
            document.getElementById(`AtaqueTres`).innerHTML = `Ataque: ${AtaqueTres}`
        }
        if (data.stats[i].stat.name === 'defense') { 
           DefensaTres = data.stats[i].base_stat;
            document.getElementById(`DefensaTres`).innerHTML = `Defensa: ${DefensaTres}`
        }
    }
}

// Llamada a las funciones pasando los IDs 
console.log(PrimerPokemon(PokemonUno))
console.log (SegundoPokemon(PokemonDos))
console.log(TercerPokemon(PokemonTres))


//Acumulador que guarda el ataque y la defensa del equipo A
async function AcumuladorEquipoA() {
        await PrimerPokemon(PokemonUno);
        await SegundoPokemon(PokemonDos);
        await TercerPokemon(PokemonTres);
    AtaqueEquipoA= AtaqueUno + AtaqueDos + AtaqueTres
    DefensaEquipoA =  DefensaUno + DefensaDos + DefensaTres
    console.log("Ataque Equipo A:", AtaqueEquipoA);
    console.log("Defensa Equipo A:", DefensaEquipoA);

    document.getElementById('TotalAtkA').innerHTML = `El Ataque Total del equipo A es: ${AtaqueEquipoA}`
    document.getElementById('TotalDefA').innerHTML = `La Defensa Total del equipo A es: ${DefensaEquipoA}`
    
}




async function CuartoPokemon(IdPokemonCuatro) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonCuatro}`);
  const data = await response.json();
  // Asignar el nombre y la imagen del Pokémon a las variables
  NombreCuatro = data.name;
  ImagenCuatro = data.sprites.front_default;
  // Actualizar el HTML
  document.getElementById('NombreCuatro').innerHTML = NombreCuatro;
  document.getElementById('ImagenCuatro').src = ImagenCuatro;
   //Busca y Guarda Valor de Ataque y Defensa
  for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            AtaqueCuatro = data.stats[i].base_stat;
            document.getElementById(`AtaqueCuatro`).innerHTML = `Ataque: ${AtaqueCuatro}`
        }
        if (data.stats[i].stat.name === 'defense') { 
           DefensaCuatro = data.stats[i].base_stat;
           document.getElementById(`DefensaCuatro`).innerHTML= `Defensa: ${DefensaCuatro}`
        }
    }
}

async function QuintoPokemon(IdPokemonCinco) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonCinco}`);
  const data = await response.json();
  // Asignar el nombre y la imagen del Pokémon a las variables
  NombreCinco = data.name;
  ImagenCinco = data.sprites.front_default;
  // Actualizar el HTML
  document.getElementById('NombreCinco').innerHTML = NombreCinco;
  document.getElementById('ImagenCinco').src = ImagenCinco;
   //Busca y Guarda Valor de Ataque y Defensa
  for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            AtaqueCinco = data.stats[i].base_stat;
             document.getElementById(`AtaqueCinco`).innerHTML = `Ataque: ${AtaqueCinco}`
        }
        if (data.stats[i].stat.name === 'defense') { 
           DefensaCinco = data.stats[i].base_stat;
            document.getElementById(`DefensaCinco`).innerHTML= `Defensa: ${DefensaCinco}`
        }
    }
}

async function SextoPokemon(IdPokemonSeis) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonSeis}`);
  const data = await response.json();
  // Asignar el nombre y la imagen del Pokémon a las variables
  NombreSeis = data.name;
  ImagenSeis = data.sprites.front_default;
  // Actualizar el HTML
  document.getElementById('NombreSeis').innerHTML = NombreSeis;
  document.getElementById('ImagenSeis').src = ImagenSeis;
   //Busca y Guarda Valor de Ataque y Defensa
  for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            AtaqueSeis = data.stats[i].base_stat;
             document.getElementById(`AtaqueSeis`).innerHTML = `Ataque: ${AtaqueSeis}`
        }
        if (data.stats[i].stat.name === 'defense') { 
           DefensaSeis = data.stats[i].base_stat;
            document.getElementById(`DefensaSeis`).innerHTML= `Defensa: ${DefensaSeis}`
        }
    }
}
// Llamada a las funciones pasando los IDs 
console.log(CuartoPokemon(PokemonCuatro));
console.log(QuintoPokemon(PokemonCinco));
console.log(SextoPokemon(PokemonSeis));


//Acumulador de defensa y ataque del equipo B
async function AcumuladorEquipoB() {
        await CuartoPokemon(PokemonCuatro);
        await QuintoPokemon(PokemonCinco);
        await SextoPokemon(PokemonSeis);
    AtaqueEquipoB= AtaqueCuatro + AtaqueCinco + AtaqueSeis
    DefensaEquipoB =  DefensaCuatro + DefensaCinco + DefensaSeis
    console.log("Ataque Equipo B:", AtaqueEquipoB);
    console.log("Defensa Equipo B:", DefensaEquipoB);

    document.getElementById('TotalAtkB').innerHTML = `El Ataque Total del equipo B es: ${AtaqueEquipoB}`
    document.getElementById('TotalDefB').innerHTML = `La Defensa Total del equipo B es: ${DefensaEquipoB}`



}



//funcion que resta la defensa de cada equipo y guarda el resultado
async function EquipoGanador() {
    await AcumuladorEquipoA(AtaqueEquipoA,DefensaEquipoB)
    await AcumuladorEquipoB(AtaqueEquipoB, DefensaEquipoB)

    DiferenciaEquipoA= AtaqueEquipoA - DefensaEquipoB
    DiferenciaEquipoB= AtaqueEquipoB - DefensaEquipoA
console.log(`La diferencia Entre Ataque A - Defensa B es: ${DiferenciaEquipoA}`)
console.log(`La diferencia Entre Ataque B - Defensa A es: ${DiferenciaEquipoB}`)

}
console.log(EquipoGanador())



//Boton del dado que cuenta las tres tiradas y luego se deshabilita
document.getElementById('DadosEUno').addEventListener('click',
   
 async function contador(){
    let Tirada
        TiradaDado ++;
    //console.log(TiradaDado)

    if (TiradaDado === 1) {
         Tirada = Math.floor(Math.random() * (MaxDados - MinDados + 1)) + MinDados;
         document.getElementById('TiradaAUno').innerHTML=`Primer Tirada: ${Tirada} `
        
}
 else if (TiradaDado === 2) {

     Tirada = Math.floor(Math.random() * (MaxDados - MinDados + 1)) + MinDados;
     document.getElementById('TiradaADos').innerHTML=`Segunda Tirada: ${Tirada} `
        
        } else if( TiradaDado ===3){
            Tirada = Math.floor(Math.random() * (MaxDados - MinDados + 1)) + MinDados;
            document.getElementById('TiradaATres').innerHTML=`Tercer Tirada: ${Tirada} `
            document.getElementById('DadosEUno').disabled = true;
             DeshabilitarBoton()
          
        }
    if (Tirada > ValorMaximo) {
    ValorMaximo = Tirada
    TiradaNumero = TiradaDado
}
 //console.log(Tirada)
console.log(`EL VALOR MAXIMO DE A ES: ${ValorMaximo} y salio en la tirada Nº ${TiradaNumero}`)
    }
    
)


//Boton del dado que cuenta las tres tiradas y luego se deshabilita
document.getElementById('DadosEDos').addEventListener('click',
   
 async function contador2(){
    let Tirada2
        TiradaDado2 ++;
   // console.log(TiradaDado2)
    if (TiradaDado2 === 1) {
         Tirada2 = Math.floor(Math.random() * (MaxDados - MinDados + 1)) + MinDados;
         document.getElementById('TiradaBUno').innerHTML=`Primer Tirada: ${Tirada2} `
        
}
 else if (TiradaDado2 === 2) {

     Tirada2 = Math.floor(Math.random() * (MaxDados - MinDados + 1)) + MinDados;
     document.getElementById('TiradaBDos').innerHTML=`Segunda Tirada: ${Tirada2} `
        
        } else if( TiradaDado2 ===3){
            Tirada2 = Math.floor(Math.random() * (MaxDados - MinDados + 1)) + MinDados;
            document.getElementById('TiradaBTres').innerHTML=`Tercer Tirada: ${Tirada2} `
            document.getElementById('DadosEDos').disabled = true;
             DeshabilitarBoton()
    
        }

    
         if (Tirada2 > ValorMaximo2) {
    ValorMaximo2 = Tirada2
    TiradaNumero2 = TiradaDado2
}
console.log(`EL VALOR MAXIMO DE B ES: ${ValorMaximo2} y salio en la tirada Nº ${TiradaNumero2}`)
    }


)

function DeshabilitarBoton() {
    const EquipoAlisto = document.getElementById('DadosEUno').disabled
    const EquipoBlisto = document.getElementById('DadosEDos').disabled 
    
    if ( EquipoAlisto && EquipoBlisto ) {
          document.getElementById('CombatePokemon').disabled = false;
    
  } else {
         document.getElementById('CombatePokemon').disabled = true;
   
  }
    
}

//boton de inico de combate
document.getElementById('CombatePokemon').addEventListener('click',
    async function MuestraHTML() {

        await MuestraResultado()
        
    }
)

//Espera los resultados de otras funciones y muestra en html los resultados del combate
async function MuestraResultado() {
    await PrimerPokemon(PokemonUno)
    await SegundoPokemon(PokemonDos)
    await TercerPokemon(PokemonTres)
    await CuartoPokemon(PokemonCuatro)
    await QuintoPokemon(PokemonCinco)
    await SextoPokemon(PokemonSeis)
    await EquipoGanador(DiferenciaEquipoA, DefensaEquipoB)
    await AcumuladorEquipoA(AtaqueEquipoA,DefensaEquipoA)
    await AcumuladorEquipoB(AtaqueEquipoB,DefensaEquipoB)
    TiradaNumero,TiradaNumero2,ValorMaximo,ValorMaximo2

if ( DiferenciaEquipoA > DiferenciaEquipoB ) {
    
    console.log( "El equipo A gana")
    document.getElementById('Borrado2').remove()
    document.getElementById('Borrado').remove()
    document.getElementById('Separador').remove()
    document.getElementById('Datos').innerHTML = "EQUIPO A ES EL GANADOR"
    document.getElementById('EquipoGanadorUno').innerHTML = NombreUno
    document.getElementById('ImagenEquipoGanadorUno').src= ImagenUno
    document.getElementById('EquipoGanadorDos').innerHTML = NombreDos
    document.getElementById('ImagenEquipoGanadorDos').src= ImagenDos
    document.getElementById('EquipoGanadorTres').innerHTML = NombreTres
    document.getElementById('ImagenEquipoGanadorTres').src= ImagenTres
    document.getElementById('stats').innerHTML =`Datos Equipo Ganador`
    document.getElementById('TotalAtakEquipoGanador').innerHTML=`Total Ataque: ${AtaqueEquipoA}.`
    document.getElementById('TotalDefeEquipoGanador').innerHTML= `Total Defensa: ${DefensaEquipoA}.`
    document.getElementById('stats2').innerHTML =`Datos Equipo Perdedor`
    document.getElementById('TotalAtakEquipoPerdedor').innerHTML=`Equipo Perdedor total Ataque: ${AtaqueEquipoB}.`
    document.getElementById('TotalDefeEquipoPerdedor').innerHTML=`Equipo Perdedor total Defensa: ${DefensaEquipoB}`
    document.getElementById('Calculo').innerHTML=`La diferencia entre cada equipo es:`
    document.getElementById('DiferenciaA').innerHTML=`La diferencia Entre Ataque A - Defensa B es: ${DiferenciaEquipoA}.`
    document.getElementById('DiferenciaB').innerHTML=`La diferencia Entre Ataque B - Defensa A es: ${DiferenciaEquipoB}.`
    document.getElementById('Calculo2').innerHTML= `La tirada de DADOS de los dos Team: `
    document.getElementById('TiradaUno').innerHTML=`Valor Mayor en Tirada Equipo A: ${ValorMaximo}  y fue en la tirada Nº ${TiradaNumero}`
    document.getElementById('TiradaDos').innerHTML=`Valor Mayor en Tirada Equipo B: ${ValorMaximo2} y fue en la tirada Nº ${TiradaNumero2} `

} else if (DiferenciaEquipoB > DiferenciaEquipoA) {

    console.log("El equipo B gana")
    document.getElementById('Borrado').remove()
    document.getElementById('Borrado2').remove()
    document.getElementById('Separador').remove()
    document.getElementById('Datos').innerHTML = "EQUIPO B ES EL GANADOR"
    document.getElementById('EquipoGanadorUno').innerHTML = NombreCuatro
    document.getElementById('ImagenEquipoGanadorUno').src= ImagenCuatro
    document.getElementById('EquipoGanadorDos').innerHTML = NombreCinco
    document.getElementById('ImagenEquipoGanadorDos').src= ImagenCinco
    document.getElementById('EquipoGanadorTres').innerHTML = NombreSeis
    document.getElementById('ImagenEquipoGanadorTres').src= ImagenSeis
    document.getElementById('stats').innerHTML =`Datos Equipo Ganador`
    document.getElementById('TotalAtakEquipoGanador').innerHTML= ` Total Ataque: ${AtaqueEquipoB}.`
    document.getElementById('TotalDefeEquipoGanador').innerHTML= ` Total Defensa: ${DefensaEquipoB}.`
    document.getElementById('stats2').innerHTML =`Datos Equipo Perdedor`
    document.getElementById('TotalAtakEquipoPerdedor').innerHTML=`Equipo Perdedor Total Ataque: ${AtaqueEquipoA}.`
    document.getElementById('TotalDefeEquipoPerdedor').innerHTML= `Equipo Perdedor Total Defensa: ${DefensaEquipoA}.`
    document.getElementById('Calculo').innerHTML=`La diferencia entre cada equipo es:`
    document.getElementById('DiferenciaA').innerHTML=`La diferencia Entre Ataque B - Defensa A es: ${DiferenciaEquipoB}.`
    document.getElementById('DiferenciaB').innerHTML=`La diferencia Entre Ataque A - Defensa B es: ${DiferenciaEquipoA}.`
    document.getElementById('Calculo2').innerHTML= `La tirada de DADOS de los dos Team: `
    document.getElementById('TiradaUno').innerHTML=`Valor Mayor en Tirada Equipo A: ${ValorMaximo}  y fue en la tirada Nº ${TiradaNumero}`
    document.getElementById('TiradaDos').innerHTML=`Valor Mayor en Tirada Equipo B: ${ValorMaximo2} y fue en la tirada Nº ${TiradaNumero2} `


} else if( DiferenciaEquipoA === DiferenciaEquipoB){

    document.getElementById('CasoEmpate').innerHTML= "El Combate Quedo Empate y se decidio por el Mayor valor en los dados"
    
    if (ValorMaximo > ValorMaximo2) {
        console.log( "El equipo A gana")
    document.getElementById('Borrado2').remove()
    document.getElementById('Borrado').remove()
    document.getElementById('Separador').remove()
    document.getElementById('Datos').innerHTML = "EQUIPO A ES EL GANADOR"
    document.getElementById('EquipoGanadorUno').innerHTML = NombreUno
    document.getElementById('ImagenEquipoGanadorUno').src= ImagenUno
    document.getElementById('EquipoGanadorDos').innerHTML = NombreDos
    document.getElementById('ImagenEquipoGanadorDos').src= ImagenDos
    document.getElementById('EquipoGanadorTres').innerHTML = NombreTres
    document.getElementById('ImagenEquipoGanadorTres').src= ImagenTres
    document.getElementById('stats').innerHTML =`Datos Equipo Ganador`
    document.getElementById('TotalAtakEquipoGanador').innerHTML=`Total Ataque: ${AtaqueEquipoA}.`
    document.getElementById('TotalDefeEquipoGanador').innerHTML= `Total Defensa: ${DefensaEquipoA}.`
    document.getElementById('stats2').innerHTML =`Datos Equipo Perdedor`
    document.getElementById('TotalAtakEquipoPerdedor').innerHTML=`Equipo Perdedor total Ataque: ${AtaqueEquipoB}.`
    document.getElementById('TotalDefeEquipoPerdedor').innerHTML=`Equipo Perdedor total Defensa: ${DefensaEquipoB}`
    document.getElementById('Calculo').innerHTML=`La diferencia entre cada equipo es:`
    document.getElementById('DiferenciaA').innerHTML=`La diferencia Entre Ataque A - Defensa B es: ${DiferenciaEquipoA}.`
    document.getElementById('DiferenciaB').innerHTML=`La diferencia Entre Ataque B - Defensa A es: ${DiferenciaEquipoB}.`
    document.getElementById('Calculo2').innerHTML= `La tirada de DADOS de los dos Team: `
    document.getElementById('TiradaUno').innerHTML=`Valor Mayor en Tirada Equipo A: ${ValorMaximo}  y fue en la tirada Nº ${TiradaNumero}` + `Valor Mayor en Tirada Equipo B: ${ValorMaximo2} y fue en la tirada Nº ${TiradaNumero2} `
    document.getElementById('TiradaDos').innerHTML=`Valor Mayor en Tirada Equipo B: ${ValorMaximo2} y fue en la tirada Nº ${TiradaNumero2} `

        
    } else if (ValorMaximo2 > ValorMaximo) {
        console.log("El equipo B gana")
    document.getElementById('Borrado').remove()
    document.getElementById('Borrado2').remove()
    document.getElementById('Separador').remove()
    document.getElementById('Datos').innerHTML = "EQUIPO B ES EL GANADOR"
    document.getElementById('EquipoGanadorUno').innerHTML = NombreCuatro
    document.getElementById('ImagenEquipoGanadorUno').src= ImagenCuatro
    document.getElementById('EquipoGanadorDos').innerHTML = NombreCinco
    document.getElementById('ImagenEquipoGanadorDos').src= ImagenCinco
    document.getElementById('EquipoGanadorTres').innerHTML = NombreSeis
    document.getElementById('ImagenEquipoGanadorTres').src= ImagenSeis
    document.getElementById('stats').innerHTML =`Datos Equipo Ganador`
    document.getElementById('TotalAtakEquipoGanador').innerHTML= ` Total Ataque: ${AtaqueEquipoB}.`
    document.getElementById('TotalDefeEquipoGanador').innerHTML= ` Total Defensa: ${DefensaEquipoB}.`
    document.getElementById('stats2').innerHTML =`Datos Equipo Perdedor`
    document.getElementById('TotalAtakEquipoPerdedor').innerHTML=`Equipo Perdedor Total Ataque: ${AtaqueEquipoA}.`
    document.getElementById('TotalDefeEquipoPerdedor').innerHTML= `Equipo Perdedor Total Defensa: ${DefensaEquipoA}.`
    document.getElementById('Calculo').innerHTML=`La diferencia entre cada equipo es:`
    document.getElementById('DiferenciaA').innerHTML=`La diferencia Entre Ataque B - Defensa A es: ${DiferenciaEquipoB}.`
    document.getElementById('DiferenciaB').innerHTML=`La diferencia Entre Ataque A - Defensa B es: ${DiferenciaEquipoA}.`
    document.getElementById('Calculo2').innerHTML= `La tirada de DADOS de los dos Team: `
    document.getElementById('TiradaUno').innerHTML=`Valor Mayor en Tirada Equipo A: ${ValorMaximo}  y fue en la tirada Nº ${TiradaNumero}`
    document.getElementById('TiradaDos').innerHTML=`Valor Mayor en Tirada Equipo B: ${ValorMaximo2} y fue en la tirada Nº ${TiradaNumero2} `
        
    } else if (ValorMaximo === ValorMaximo2) {
        document.getElementById('CasoEmpate2').innerHTML= "El Combate quedo nuevamente empate porque los dados tenian el mismo valor Maximo"
    }

}}