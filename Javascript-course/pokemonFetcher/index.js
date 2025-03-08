



const fetchPokemon = async()=> {
    const pokemon = document.getElementById("pokemonName").value.toLowerCase()
    const pokemonImg = document.getElementById("pokemonSprite")
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (!response) {
            throw new Error("Could not fetch the data")
        }
        const data = await response.json()
        const pokemonSp = data.sprites.front_default
        pokemonImg.src = pokemonSp

    } catch(error) {
        console.error(error)
    }

}