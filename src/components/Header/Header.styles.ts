import styled from 'styled-components'

export const HeaderWrapper =  styled.header`
   height: 100vh;
    //min-height: -webkit-fill-available;
    //height: calc(100vh - calc(100vh - 100%));
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16%;
    h2{        
        text-align: right;
        margin-top: -20px ;
        @media(min-width: ${props => props.theme.screenSize.desktop}){
            font-size: 6.65vw;
            text-align: left;            
        }
    }    
    svg{
        position: absolute;
        bottom: 15%;
        transition: ease .3s;
        &:hover{
            transform: translateY(5px);
            circle{
                transition: ease .3s;
                fill: ${props => props.theme.blue};                   
            }
        }
       
    }
    >div{
        @media(min-width: ${props => props.theme.screenSize.desktop}){
            display: flex;
            flex-direction: row; 
            justify-content: space-between;  
            flex-wrap: wrap ;
            gap: 15px;
            //align-items: flex-start;
            >h2{
                //width: 40%;
            }
        }   
    }
    @media(min-width: ${props => props.theme.screenSize.desktop}){
        //padding: 18%;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    img{
        float: right;
        width: 109px;
        margin-bottom: -6px;
        @media(min-width: ${props => props.theme.screenSize.desktop}){
            //width: 185px;
            width: 13.4vw;
        }
    }
    @media(min-width: ${props => props.theme.screenSize.desktop}){
        //padding-right: 3vw;
    }
`

export const Subtitle = styled.div`
    
    h1, p {
        font-weight: 300;
        font-size: 24px;
        margin-block-end: 0;
        margin-block-start: 0;
        @media(min-width: ${props => props.theme.screenSize.desktop}){
            font-size: 40px;
        }
    }
    h1{
        margin-top: 5px;
        @media(min-width: ${props => props.theme.screenSize.desktop}){            
            margin-top: 0;
        }
    }
    h2{
        font-weight: 300;
        @media(min-width: ${props => props.theme.screenSize.desktop}){
            font-size: 6.65vw;
            text-align: left;
        }
    }
    @media(min-width: ${props => props.theme.screenSize.desktop}){            
            //width: 60%;
    }
`