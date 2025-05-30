let NombreUno, NombreDos
let ImagenUno, ImagenDos
let NombreTres
let ImagenTres
let AtaqueUno = 0
let AtaqueDos = 0
let AtaqueTres = 0
let DefensaUno = 0
let DefensaDos = 0
let DefensaTres = 0

document.getElementById('IngresoPokemon').addEventListener('click', 

async function() {
    let PokemonUno = document.getElementById('PokemonUno').value.toLowerCase();
    let PokemonDos = document.getElementById('PokemonDos').value.toLowerCase();


    console.log(PokemonUno)

    await PrimerPokemon(PokemonUno)
    await SegundoPokemon(PokemonDos)
    PokemonGanador(AtaqueUno, AtaqueDos, AtaqueTres)
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
document.getElementById('NuevoButt').addEventListener('click',

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
    })

async function PokemonGanador(AtakUno, AtakDos, AtakTres) {

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
}
