import { AppRoutes } from './pages/routes'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import img from './images/home-background-claro.webp'

function App() {
  return (
   <Section>
        <GlobalStyle/>
        <AppRoutes/>
   </Section>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Kanit', sans-serif;
    
  }
`
const Section = styled.section`
    background: url(${img}) center fixed;
    background-size: cover;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default App;