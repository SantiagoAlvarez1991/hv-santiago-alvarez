import { createGlobalStyle, styled } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --textColor : #455A64
        --green : #00E676
    }
    *{
        box-sizing: border-box;
    }   
    body {
        margin: 0;
        padding: 0;        
        font-family: 'Red Hat Display', sans-serif;
        //color: var(--textColor);        
        color: ${props => props.theme.textColor};        
    }
    main{
       //background: linear-gradient(#FFF 25%, #F5F6F7 75%)
       background: linear-gradient(
        to bottom,
        #FFF 0%,
        #FFF 40%,
        #F5F6F7 40%,
        #F5F6F7 100%
        )
    }
    h1, h2, h3, h4, h5{
        margin: 0;
    }
    h2 {
        font-weight: 800;
        font-size: 48px
    }
    h3 {
        font-size: 36px;        
    }
    h4 {
        font-size: 28px;   
        font-weight: 900;
        margin-bottom: 20px;
        &::before{
            content: " ";
            position: absolute;
            top:32px;                 
            width:20px;
            height: 5px;
            //background-color: ${props => props.theme.green};
        }           
    }
    h5 {
        font-size: 28px;
        font-weight: 300;
    }
`
export default GlobalStyles

export const H4Variation = styled.h4`
    font-size: 50px;
    color: rgba(255,255,255, .4);
    font-weight: 900;
    margin-bottom: 21px;
`
