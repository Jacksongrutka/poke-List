import { createContext, useState } from "react";
import backGroundLight from "../images/home-background-claro.webp"
import backGroundDark from "../images/home-background-escuro.jpg"


export const themes = {
    light:{
        color:"#000000",
        background: backGroundLight,
        themeLabel: "Daymode",
        backgroundColor: "#ffc222"

    },
    dark:{
        color: "#ffffff",
        background: backGroundDark,
        themeLabel: "Nigthmode",
        backgroundColor: "#000"
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [theme,setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value ={{theme,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
