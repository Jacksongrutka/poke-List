async function getAbilityDescription (url) {
    const response = await fetch (`${url}`)
    return response.json()
}

export { getAbilityDescription }