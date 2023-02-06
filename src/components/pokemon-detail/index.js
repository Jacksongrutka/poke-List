import { useState, useEffect } from "react";
import { getPokemonDetail } from "../../services/getPokemonDetail";
import { getEffect } from "../pokemon-ability-detail";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imgCard from '../../images/card-background.jpg'
import { Button } from "../button";
import img from "../../images/ImgFloresta.jpg"

const PokemonDetail = ({ name }) => {

    const [pokemonInfo, setPokemonInfo] = useState({
        image: "",
        name: "",
        type: [],
        moves: [],
        abilities: [],
    })

    const Info = () => {
        return (
            <Card>
                <InternCard>
                    <BtnContainer>
                        <BtnSize to="/">
                            <Button label = "voltar"/>
                        </BtnSize>
                    </BtnContainer>
                    <InfoContainer>
                        <ImageContainer>
                            <img src={pokemonInfo.image} alt={pokemonInfo.name}></img>
                        </ImageContainer>
                        <Information>
                            <ul>
                                {
                                    pokemonInfo.type.map((type, index) => {
                                        return (
                                            <li key={index}>
                                                {type.type.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <h1>{pokemonInfo.name}</h1>
                        </Information>
                    </InfoContainer>
                    <ContainerSkills>
                        <ContainerSkillsTitles>
                            <p className="moves" id="moves"  onClick={select}>Moves</p>
                            <p className="naoSelecionado" id="abilites"  onClick={select}>Abilites</p>
                        </ContainerSkillsTitles>
                        <ContainerMoves>
                            <ul>
                                {
                                    pokemonInfo.moves.map((move, index) => {
                                        return (
                                            <li key={index}>{move.move.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </ContainerMoves>
                        <ContainerAbilites>
                            <ul>
                                {
                                    pokemonInfo.abilities.map((ability, index) => {
                                        return (
                                            <li key={index}>
                                                <h3>{ability.ability.name} :</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </ContainerAbilites>
                    </ContainerSkills>
                </InternCard>
            </Card>


        )
    }
    useEffect(() => {

        const fetchData = async () => {
            const pokemon = await getPokemonDetail(name)
            setPokemonInfo({
                image: pokemon.sprites.front_default,
                name: pokemon.name,
                type: pokemon.types,
                moves: pokemon.moves,
                abilities: pokemon.abilities
            })
        }

        fetchData()

    }, [])

    const select = () =>{
        
    }

    return (
        <Info />

    )


}

const Card = styled.div`
        width: 500px;
        background: url(${imgCard}) center no-repeat;
        background-size: cover;
        margin-top: 10%;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        padding-bottom: 20px;
        margin-bottom:50px;
        border-radius:5%;
`
const InternCard = styled.div`
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius:5%;
`
const BtnContainer = styled.div`
        padding-top: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
`
const BtnSize = styled(Link)`
    width: 100px;
    height: 40px;
`
const InfoContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
`
const ImageContainer = styled.div`
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
        width: 90%;
        background: url("${img}") center;
        background-size: cover;
        border-radius: 10%;
        margin-top: 2%; 
    img{
        width: 100%;
    }
`
const Information = styled.div`
        display: flex;
        flex-direction: row-reverse;
        align-items: baseline;
        justify-content: space-between;
        width: 85%;
        margin-top: 2%;
    h1{
        text-transform: uppercase;
        font-family: 'Permanent Marker', cursive;
        letter-spacing: 2px;
        color:#4c6cfde7;
        text-shadow: 2px 2px 20px #000000;
        font-size: 35px;
    }
    ul{
        list-style:none;
        display: flex;
    }
    ul li{
        padding-right: 10px;
        font-size: 25px;
        padding-right: 10px;

    }
`
const ContainerSkills = styled.div`
        width: 85%;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
        margin-top:2%;  
`
const ContainerSkillsTitles = styled.div`
        display: flex;
        text-align: center;
    p{
        width: 50%;
        font-size: 3rem;
        padding: 0px;
    }
    p:hover{
        cursor: pointer;
    }
    .naoSelecionado{
        background-color: #4c6cfde7;
    }
`
const ContainerMoves = styled.div`
        width: 100%;
        display: block;
    ul{
        padding: 2% 0% 1% 4%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        list-style: none;
    }
    li{
        font-size: 1.5rem;
        font-weight: 300;
    }
`
const ContainerAbilites = styled.div`
        display: none;
        width: 100%;
    ul{
        padding: 2% 0% 1% 4%;
    }
    li{
        display: grid;
        grid-template-columns: 1fr 2fr;
        width: 100%;
        padding: 10px 15px 10px 0;
    }
    h3{
        font-size: 1.8rem;
        font-weight: 700;
        color: #4c6cfde7;
        align-self: center;
    }
    p{
        font-size: 1.5rem;
    }
`




export { PokemonDetail }