import { Routes , Route , BrowserRouter } from 'react-router-dom'
import { Home } from './home'
import { PokeInfo } from './poke-info'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/poke-info/:name' element={<PokeInfo/>}/>
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }