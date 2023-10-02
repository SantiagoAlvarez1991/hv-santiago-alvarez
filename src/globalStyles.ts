import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --textColor : #455A64
        --green : #00E676
    }
    *{
        box-sizing: border-box;
        font-size: 10px;
    } 
    html{
        scroll-behavior: smooth;
    }  
    body {
        margin: 0;
        padding: 0;        
        font-family: 'Red Hat Display', sans-serif;
        //color: var(--textColor);        
        color: ${props => props.theme.textColor};  
        //min-height: 100vh; 
        
        @media (min-width: ${props => props.theme.screenSize.desktop}) {
            
        }
    }
    main{
       //background: linear-gradient(#FFF 25%, #F5F6F7 75%)
       /* background: linear-gradient(
        to bottom,
        #FFF 0%,
        #FFF 40%,
        #F5F6F7 40%,
        #F5F6F7 100%
        );
        @media(min-width: ${props => props.theme.screenSize.desktop}){
            background: #FFF
        } */
    }
    h1, h2, h3, h4, h5{
        margin: 0;
    }  
    h2 {
        font-weight: 800;
        font-size: 48px
    }
    h3 {
        font-size: 2rem;
        font-weight: 800;
    }
    
   
`
export default GlobalStyles
