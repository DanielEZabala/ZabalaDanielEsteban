let NombreUno, NombreDos, NombreTres, NombreCuatro, NombreCinco, NombreSeis
let ImagenUno, ImagenDos, ImagenTres, ImagenCuatro, ImagenCinco, ImagenSeis
let AtaqueUno = 0
let AtaqueDos = 0
let AtaqueTres = 0
let AtaqueCuatro = 0
let AtaqueCinco = 0
let AtaqueSeis = 0
let DefensaUno = 0
let DefensaDos = 0
let DefensaTres = 0
let DefensaCuatro = 0
let DefensaCinco = 0
let DefensaSeis = 0
let ContenedorUnoAtaque = 0
let ContenedorDosAtaque = 0
let ContenedorUnoDefensa = 0
let ContenedorDosDefensa = 0
let EquipoUnoDefRestante= 0
let EquipoDosDefRestante= 0


document.getElementById('IngresoPokemon').addEventListener('click', 

async function() {
    let PokemonUno = document.getElementById('PokemonUno').value.toLowerCase();
    let PokemonDos = document.getElementById('PokemonDos').value.toLowerCase();
    let PokemonTres = document.getElementById('PokemonTres').value.toLowerCase();
    let PokemonCuatro = document.getElementById('PokemonCuatro').value.toLowerCase();
    let PokemonCinco = document.getElementById('PokemonCinco').value.toLowerCase();
    let PokemonSeis = document.getElementById('PokemonSeis').value.toLowerCase();


    console.log(PokemonUno)

    await PrimerPokemon(PokemonUno)
    await SegundoPokemon(PokemonDos)
    await TercerPokemon(PokemonTres)
    AtaqueEquipoUno(AtaqueUno, AtaqueDos, AtaqueTres)
    DefensaEquipoUno(DefensaUno, DefensaDos, DefensaTres)
    await CuartoPokemon(PokemonCuatro)
    await QuintoPokemon(PokemonCinco)
    await SextoPokemon(PokemonSeis)
    AtaqueEquipoDos(AtaqueCuatro, AtaqueCinco, AtaqueSeis)
    DefensaEquipoDos(DefensaCuatro, DefensaCinco, DefensaSeis)

   EquipoGanador(ContenedorUnoAtaque,ContenedorDosAtaque,ContenedorUnoDefensa, ContenedorDosDefensa)
    //PokemonGanador(AtaqueUno, AtaqueDos, AtaqueTres)
})


async function PrimerPokemon(IdPokemonUno) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonUno}`)
    const data = await response.json()

    NombreUno = document.getElementById('TituloPokemonUno').innerHTML = (data.name)
    ImagenUno = document.getElementById('ImagenPokemonUno').src = data.sprites.front_default
    

    for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            document.getElementById('listaPokemonUno').innerHTML = (' Daño: '+ data.stats[i].base_stat)
            AtaqueUno = data.stats[i].base_stat;
        }
        if (data.stats[i].stat.name === 'defense') { 
            document.getElementById('listaPokemonUnoDef').innerHTML = (' Defensa: '+ data.stats[i].base_stat)
           DefensaUno = data.stats[i].base_stat;
        }
    }
}

async function SegundoPokemon(IdPokemonDos) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonDos}`)
    const data = await response.json()

    NombreDos = document.getElementById('TituloPokemonDos').innerHTML = (data.name)
    ImagenDos = document.getElementById('ImagenPokemonDos').src = data.sprites.front_default

    for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            document.getElementById('listaPokemonDos').innerHTML = (' Daño: '+ data.stats[i].base_stat)
        
            AtaqueDos = data.stats[i].base_stat;
        }       
        if (data.stats[i].stat.name === 'defense') { 
            document.getElementById('listaPokemonDosDef').innerHTML = (' Defensa: '+ data.stats[i].base_stat)
           DefensaDos = data.stats[i].base_stat;
        } 
    }
}
async function TercerPokemon(IdPokemonTres) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonTres}`);
    const data = await response.json();

    NombreTres = document.getElementById('TituloPokemonTres').innerHTML = data.name;
    ImagenTres = document.getElementById('ImagenPokemonTres').src = data.sprites.front_default;

    for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') {
            document.getElementById('listaPokemonTres').innerHTML = ' Daño: ' + data.stats[i].base_stat;
            AtaqueTres = data.stats[i].base_stat;
        }
        if (data.stats[i].stat.name === 'defense') {
            document.getElementById('listaPokemonTresDef').innerHTML = ' Defensa: ' + data.stats[i].base_stat;
            DefensaTres = data.stats[i].base_stat;
        }
    }
}
function AtaqueEquipoUno(AtaqueUno, AtaqueDos, AtaqueTres) {
    ContenedorUnoAtaque = AtaqueUno, AtaqueDos, AtaqueTres
console.log(`Total Ataque del Equipo Uno: ${ContenedorUnoAtaque}`)
    
}
function DefensaEquipoUno(DefensaUno, DefensaDos, DefensaTres) {
    ContenedorUnoDefensa = DefensaUno + DefensaDos + DefensaTres
console.log(`Total Defensa del Equipo Uno ${ContenedorUnoDefensa}`)

}


async function CuartoPokemon(IdPokemonCuatro) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonCuatro}`);
    const data = await response.json();

    NombreCuatro = document.getElementById('TituloPokemonCuatro').innerHTML = data.name;
    ImagenCuatro = document.getElementById('ImagenPokemonCuatro').src = data.sprites.front_default;

    for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') {
            document.getElementById('listaPokemonCuatro').innerHTML = ' Daño: ' + data.stats[i].base_stat;
            AtaqueCuatro = data.stats[i].base_stat;
        }
        if (data.stats[i].stat.name === 'defense') {
            document.getElementById('listaPokemonCuatroDef').innerHTML = ' Defensa: ' + data.stats[i].base_stat;
            DefensaCuatro = data.stats[i].base_stat;
        }
    }
}

async function QuintoPokemon(IdPokemonCinco) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonCinco}`);
    const data = await response.json();

    NombreCinco = document.getElementById('TituloPokemonCinco').innerHTML = data.name;
    ImagenCinco = document.getElementById('ImagenPokemonCinco').src = data.sprites.front_default;

    for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') {
            document.getElementById('listaPokemonCinco').innerHTML = ' Daño: ' + data.stats[i].base_stat;
            AtaqueCinco = data.stats[i].base_stat;
        }
        if (data.stats[i].stat.name === 'defense') {
            document.getElementById('listaPokemonCincoDef').innerHTML = ' Defensa: ' + data.stats[i].base_stat;
            DefensaCinco = data.stats[i].base_stat;
        }
    }
}

async function SextoPokemon(IdPokemonSeis) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonSeis}`);
    const data = await response.json();

    NombreSeis = document.getElementById('TituloPokemonSeis').innerHTML = data.name;
    ImagenSeis = document.getElementById('ImagenPokemonSeis').src = data.sprites.front_default;

    for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') {
            document.getElementById('listaPokemonSeis').innerHTML = ' Daño: ' + data.stats[i].base_stat;
            AtaqueSeis = data.stats[i].base_stat;
        }
        if (data.stats[i].stat.name === 'defense') {
            document.getElementById('listaPokemonSeisDef').innerHTML = ' Defensa: ' + data.stats[i].base_stat;
            DefensaSeis = data.stats[i].base_stat;
        }
    }
}
function AtaqueEquipoDos(AtaqueCuatro, AtaqueCinco, AtaqueSeis) {
    ContenedorDosAtaque = AtaqueCuatro, AtaqueCinco, AtaqueSeis
console.log(`Total Ataque del Equipo Dos: ${ContenedorDosAtaque}`)
    
}
function DefensaEquipoDos(DefensaCuatro, DefensaCinco, DefensaSeis) {
    ContenedorDosDefensa = DefensaCuatro + DefensaCinco + DefensaSeis
console.log(`Total Defensa de Equipo Dos: ${ContenedorDosDefensa}`)
    
}

function EquipoGanador(ContenedorUnoAtaque,ContenedorDosAtaque,ContenedorUnoDefensa, ContenedorDosDefensa) {
    EquipoUnoDefRestante= ContenedorUnoDefensa - ContenedorDosAtaque
    EquipoDosDefRestante= ContenedorDosDefensa - ContenedorUnoAtaque
console.log(`La defensa restante del equipo Uno es: ${EquipoUnoDefRestante}`)
console.log(`La defensa restante del equipo Dos es: ${EquipoDosDefRestante}`)
if (EquipoUnoDefRestante > EquipoDosDefRestante) {
        document.getElementById('TituloPokemon1Ganador').innerHTML = (NombreUno)
        document.getElementById('ImagenPokemon1Ganador').src = (ImagenUno)
        document.getElementById('TituloPokemon2Ganador').innerHTML = (NombreDos)
        document.getElementById('ImagenPokemon2Ganador').src = (ImagenDos)
        document.getElementById('TituloPokemon3Ganador').innerHTML = (NombreTres)
        document.getElementById('ImagenPokemon3Ganador').src = (ImagenTres)
} else if (EquipoDosDefRestante > EquipoUnoDefRestante) {
     document.getElementById('TituloPokemon1Ganador').innerHTML = (NombreCuatro)
        document.getElementById('ImagenPokemon1Ganador').src = (ImagenCuatro)
        document.getElementById('TituloPokemon2Ganador').innerHTML = (NombreCinco)
        document.getElementById('ImagenPokemon2Ganador').src = (ImagenCinco)
        document.getElementById('TituloPokemon3Ganador').innerHTML = (NombreSeis)
        document.getElementById('ImagenPokemon3Ganador').src = (ImagenSeis)
}

    
}
/*document.getElementById('NuevoButt').addEventListener('click',

    async function ()  {
        let IdPokemonTres = document.getElementById('PokemonTres').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonTres}`);
        const data = await response.json();
    
        NombreTres = document.getElementById('TituloPokemonTres').innerHTML = data.name;
        ImagenTres = document.getElementById('ImagenPokemonTres').src = data.sprites.front_default;
    
        for (let i = 0; i < data.stats.length; i++) {
            if (data.stats[i].stat.name === 'attack') {
                document.getElementById('listaPokemonTres').innerHTML = 'Daño: ' + data.stats[i].base_stat;
                AtaqueTres = data.stats[i].base_stat;
            }
            if (data.stats[i].stat.name === 'defense') {
                document.getElementById('listaPokemonTresDef').innerHTML = 'Defensa: ' + data.stats[i].base_stat;
                DefensaTres = data.stats[i].base_stat;
            }
        }
    })*/

/*async function PokemonGanador(AtakUno, AtakDos, AtakTres) {

    if (AtakUno > AtakDos && AtakUno > AtakTres ) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreUno)
        document.getElementById('ImagenPokemonGanador').src = (ImagenUno)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: '+ AtakUno)
        document.getElementById('listaPokemonGanadorDef').innerHTML = (' Defensa: '+ DefensaUno)
    } else if (AtakDos > AtakUno && AtakDos > AtakTres) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreDos)
        document.getElementById('ImagenPokemonGanador').src = (ImagenDos)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: '+ AtakDos)
        document.getElementById('listaPokemonGanadorDef').innerHTML = (' Defensa: '+ DefensaDos)
    }else if (AtakTres > AtakUno && AtakTres> AtakDos) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreTres)
        document.getElementById('ImagenPokemonGanador').src = (ImagenTres)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: '+ AtakTres)
        document.getElementById('listaPokemonGanadorDef').innerHTML = (' Defensa: '+ DefensaTres)
    } else {
        document.getElementById('TituloPokemonGanador').innerHTML = ('EMPATE')
        document.getElementById('listaPokemonGanador').innerHTML = ('Elige otro pokemon')
        //POKEMON PARA EMPATE: 300 y 299
    }
}*/
