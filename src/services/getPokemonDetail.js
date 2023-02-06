async function getPokemonDetail (name) {
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}/`)
    return response.json()
}

export { getPokemonDetail }