import { PokemonDetail } from "../components/pokemon-detail"
import { useParams } from "react-router-dom"



const PokeInfo = () => {
    const { name } = useParams();
    
    return(
        <>
            <PokemonDetail name={name}/>
        </>
    )}

export { PokeInfo }