import styled from "styled-components";

const ThemeButton = (props) => {

    const Button = styled.a`
    position: absolute;
    top:2%;
    left: 5%;
    background-color: ${props.theme.backgroundColor};
    width:100px;
    heigth:50px;
    display:flex;
    justify-content: center;
    border-radius:30%;
:hover{
    cursor:pointer;
}
p{
    color: ${props.theme.color};
    font-size:1.5rem;
}
`

    return (
        <Button {...props}>
            <p>{props.theme.themeLabel}</p>
        </Button>
    )


}

export { ThemeButton }