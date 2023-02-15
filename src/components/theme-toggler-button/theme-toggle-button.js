import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-contexts"
import { ThemeButton } from "../theme-button/theme-button";

export const ThemeTogglerButton = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <ThemeButton onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} theme={theme}>theme toggler</ThemeButton>
    )
}

