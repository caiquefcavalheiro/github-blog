import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    :focus{
        outline:0;
        box-shadow: 0 0 0 1px ${(props) => props.theme["brand-blue"]}
    }

    body{
        background-color: ${(props) => props.theme["base-background"]};
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-weight: 400;
        font-size: 1rem;
        font-family: "Nunito", sans-serif;
        /* line-height: 160%; */
    }
`;
