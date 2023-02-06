import { ListOfPokemons } from '../components/pokemon-list'
import styled from 'styled-components'

const Home = () => (
    <>
        <ListOfPokemons />
    </>
)

const Div = styled.div`
    display: flex;
    min-heiht:100vh;
    justify-content: center;
`

export { Home }