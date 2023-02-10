import { useState, useEffect } from "react";
import { GetAbilites } from "../pokemon-ability-detail";
import styled from "styled-components";

const Skills = (props) => {

    const [skills, setSkills] = useState({
        abilites: "",
        moves: ""
    })

    useEffect(() => {
        setSkills({
            abilites:"",
            moves: "selecionado"
        })
    },[])

    const mudarSelecionado = (event) => {
    
        if (event.target.className === "selecionado"){
            return
        }else if(event.target.className !== "selecionado"){
            if(event.target.className === skills.abilites){
                setSkills({
                    abilites:"selecionado",
                    moves:""
                })
            }else if(event.target.className === skills.moves){
                setSkills({
                    abilites:"",
                    moves:"selecionado"
                })
            }
        }
    }

    return (
        <>
            <ContainerSkillsTitles>
                <p id="moves" className={skills.moves} onClick={mudarSelecionado}>Moves</p>
                <p id="abilites" className={skills.abilites} onClick={mudarSelecionado}>Abilites</p>
            </ContainerSkillsTitles>
            <ContainerMoves>
                    <div className={skills.moves}>
                    <ul>
                        {
                            props.moves.map((move, index) => {
                                return (
                                    <li key={index}>{move.move.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </ContainerMoves>
            <ContainerAbilites>
                <div className={skills.abilites}>
                    <GetAbilites skills={props.abilites} />
                </div>
            </ContainerAbilites>
        </>
    )
}

const ContainerSkillsTitles = styled.div`
        display: flex;
        text-align: center;
p{
    width: 50%;
    font-size: 3rem;
    padding: 0px;
    transition: 0.3s;
    background-color: #4c6cfde7;
}
p.selecionado{
    background-color: #fff;
}
p:hover{
    cursor: pointer;
    background-color: rgba(00,00,00,0.16);
}
p.selecionado:hover{
    background-color: #fff;
    cursor: default;
}
`
const ContainerMoves = styled.div`
    div{
        width: 100%;
        display: none;
    }
div.selecionado{
        display:block;
    }
    ul{
        padding: 2% 0% 1% 4%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        list-style: none;
        margin-bottom: 2%;
    }
    li{
        padding:2px;
        font-size: 1.5rem;
        font-weight: 300;
        color:#4c6cfde7;
        font-family: 'Permanent Marker', cursive;
    }
`
const ContainerAbilites = styled.div`
    div{
    width: 100%;
    display: none;
    }
    div.selecionado{
        display:block;
    }
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

export { Skills }