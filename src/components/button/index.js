import styled from "styled-components"
import img from "../../images/button.jpg"

const Button = (props) => {
    return(
        <A>
            <p>{props.label}</p>
        </A>
    )
}

Button.defaultProps = {
    label: 'Click aqui'
}

const A = styled.a`
        margin:0;
        background: url(${img}) center center;
        background-size: cover;
        border-radius: 5%;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
        transition: 0.3 ease-in-out;
        box-shadow: rgba(255, 251, 0, 0.384) 3px 3px 6px 0px inset, rgba(9, 5, 247, 0.39) -3px -3px 6px 1px inset;
    :hover{
        cursor: pointer;
        width: 105%;
        height: 105%;
    }
    :hover p {
        color: red;
    }
    p{
        color: #fff;
        font-size: 1.5rem;
    }
`
export { Button }