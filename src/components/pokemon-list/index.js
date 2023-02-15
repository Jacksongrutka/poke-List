import { getPokemon } from '../../services/getPokemons.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../button/index.js'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-contexts.js'

const ListOfPokemons = () => {

    const [pokemonList, setPokemonList] = useState({
        pokemons: [],
    })
    const [Count, setCount] = useState({
        pokemonsCount: 1
    })

    const { theme } = useContext(ThemeContext)

    const StyledLink = styled(Link)`
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        width: 200px;
        margin: 30px;
        text-decoration: none;
        color: ${theme.color};
        transition: 0.3s ease-in-out;
        border-radius: 40%;
    :hover{
        background-color: rgba( 00, 00, 00, 0.3);
    }
`

    const Section = () => {
        return (
            <>
                <ListContainer>
                    <Ul>
                        {
                            pokemonList.pokemons.map((pokemon, index) => {
                                return (
                                    <li key={index}>
                                        <StyledLink to={`/poke-info/${pokemon.name}`}>
                                            <H2>{pokemon.name}</H2>
                                            <Img src={pokemon.sprites.front_default} alt={pokemon.name}></Img>
                                        </StyledLink>
                                    </li>
                                )
                            })
                        }
                    </Ul>
                    <ButtonContainer>
                        <BtnSize onClick={addPokemons}>
                            <Button label = "Carregar Mais"/>
                        </BtnSize>
                    </ButtonContainer>
                </ListContainer>
            </>
        )
    }
    useEffect(() => {

        const fetchData = async () => {
            let pokemonData = []
            let pokeCount = Count.pokemonsCount
            const countLength = pokeCount

            for (let index = pokeCount; index <= countLength + 9; index++) {
                const pokemon = await getPokemon(index)
                pokemonData.push(pokemon)
                pokeCount++
            }


            setPokemonList({
                pokemons: pokemonData
            })
            setCount({
                pokemonsCount: pokeCount
            })
        }

        fetchData()

    }, [])


    const addPokemons = async () => {
        let pokemonData = pokemonList.pokemons
        let pokeCount = Count.pokemonsCount
        const countLength = pokeCount

        for (let index = pokeCount; index <= countLength + 9; index++) {
            const pokemon = await getPokemon(index)
            pokemonData.push(pokemon)
            pokeCount++
        }
        setPokemonList({
            pokemons: pokemonData
        })
        setCount({
            pokemonsCount: pokeCount
        })
    }

    return (
        <Section />
    )
}

const ListContainer = styled.div`
        padding-top: 150px;
        max-width: 2000px;
        display: flex;
        flex-direction: column;
        align-items: center;
`
const Ul = styled.ul`
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
`
const H2 = styled.h2`
        font-size: 2.5rem;
    :first-letter{
        text-transform: uppercase;
    }
`
const Img = styled.img`
        
`
const ButtonContainer = styled.div`
        display: flex;
        margin-bottom: 40px;
`
const BtnSize = styled.a`
        width:170px;
        height:50px;
`


export { ListOfPokemons }