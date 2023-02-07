import { useState, useEffect } from "react";
import styled from "styled-components";

const SkillsTitles = () => {

    // Const [skills , setSkills] ={

    // }

    return(
        <ContainerSkillsTitles>
            <p id="moves">Moves</p>
            <p id="abilites">Abilites</p>
        </ContainerSkillsTitles>
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
}
p:hover{
    cursor: pointer;
    background-color: rgba(00,00,00,0.16);
}
`

export { SkillsTitles }