import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html,
    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;

        font-family: 'Raleway', sans-serif;
        
    }

    #root {
        min-height: 100vh;
    }
`

export default GlobalStyle;