async function getPokemon(pokemon){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    return response.json()
  }

export { getPokemon }