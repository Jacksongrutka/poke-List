import { useEffect, useState } from "react"
import { getAbilityDescription } from "../../services/getAbilityDescription"

const GetAbilites = (props) => {


    const [pokemonAbility, setPokemonAbility] = useState({
        ability: []
    })

    const AbilityList = () => {
        return (
            <ul>
                {
                    pokemonAbility.ability.map((skill, index) => {
                        return (
                            
                            <li key={index}>
                                <h3>{skill.name} :</h3>
                                <p>{skill.effect_entries[1].effect}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    useEffect(() => {

        const fetchData = async () => {
            let container = []
            for (const abilite of props.skills) {
                const ability = await getAbilityDescription(abilite.ability.url)
                container.push(ability)
            }
            setPokemonAbility({
                ability:[...container]
            })

        }
        fetchData()
    }, [])
    return (
        <AbilityList />
    )
}

export { GetAbilites }