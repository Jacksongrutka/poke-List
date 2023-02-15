import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-contexts'
import { AppRoutes } from '../../pages/routes';
import { createGlobalStyle } from 'styled-components';
import { ThemeTogglerButton } from '../theme-toggler-button/theme-toggle-button';


export const AppSection = () =>{

    const { theme } = useContext(ThemeContext)

    const Section = styled.section`
    background: url(${theme.background}) center fixed;
    background-size: cover;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
    return(
        <Section>
            <GlobalStyle />
            <AppRoutes />
            <ThemeTogglerButton/>
        </Section>
    )
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Kanit', sans-serif;
    
  }
`







