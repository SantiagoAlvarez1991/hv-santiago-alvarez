import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --textColor : #455A64
    }
    *{
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;        
        font-family: 'Red Hat Display', sans-serif;
        color: var(--textColor);
        
    }
    h2 {
        font-weight: 800;
        font-size: 48px
    }
    h3 {
        font-size: 36px;
    }
`

export default GlobalStyles