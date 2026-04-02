let listaPokemon = []

async function carregarPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    let data = await response.json()
    listaPokemon = data.results
    if (listaPokemon.length === 0) {
        alert("Não achamos o seu Pokémon, tenta de novo!")
        return
    }
}   

carregarPokemon()

function sortearPokemon(){
    let numero = Math.floor(Math.random() * listaPokemon.length)
    let pokemonEscolhido = listaPokemon[numero]
    buscarDetalhes(pokemonEscolhido.url)
}

async function buscarDetalhes(url) {
    let response = await fetch(url)
    let data = await response.json()

    mostrarPokemon(data)
}

function mostrarPokemon(pokemon) {
    document.getElementById("pokemon").innerHTML = `
    <h2 tabindex="0">${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" alt="Imagem do Pokémon ${pokemon.name}" />    
    <p><strong>Altura:</strong> ${pokemon.height}</p>
    <p><strong>Peso:</strong> ${pokemon.weight}</p>
    `
    if (navigator.vibrate) {
        navigator.vibrate(200)
    }
}