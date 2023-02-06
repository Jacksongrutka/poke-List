import { getAbilityDescription } from "../../services/getAbilityDescription";

const getEffect = async (url) => {
    const response = await getAbilityDescription(url)
    const details = response.effect_entries[1].short_effect
    return (
        <p>${details}</p>
    )
}

export { getEffect }