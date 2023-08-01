import styled from 'styled-components'



export const AboutWrapper = styled.section`
    --gap: 10px;
    padding: 60px 3% 7%;
    //padding-top: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    gap: var(--gap);  
    flex-wrap:wrap;        
    @media(min-width: ${props => props.theme.screenSize.desktop}){
        flex-direction:row;
        padding: 60px 16% 7%
    } 
    div{
        &:first-child{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            img{
                width: 190px;
                @media(min-width: ${props => props.theme.screenSize.desktop}){
                    width: 277px;
                }
            }
            >div{
                padding-top: 30px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 10px;
                @media(min-width: ${props => props.theme.screenSize.desktop}){
                    flex-direction: row;
                    padding-top: 10px;
                    gap: 15px;
                    //margin: 0 auto;
                }
                //margin: 0 auto;
            }
            svg{   
                cursor: pointer;
                &:hover{
                    opacity: 80%;
                }            
               
            }   
            @media(min-width: ${props => props.theme.screenSize.desktop}){
                width: calc(45% - var(--gap));
                flex-direction: column;
            }          
        }
        &:last-child{   
            width: 100%;         
            h3, p {
                padding: 0 23px;
                @media(min-width: ${props => props.theme.screenSize.desktop}){                    
                    padding: 0px 35px;
                } 
            }
            p{
                font-size: 13px;
                font-weight: 400;
                @media(min-width: ${props => props.theme.screenSize.desktop}){                    
                    font-size: 16px;
                }
            }
            p:first-of-type{
                background-color: ${props => props.theme.softBackground};
                border-radius: 15px;
                padding: 23px;
                font-size: 14px;
                font-weight: 600;
                span{
                    text-decoration: underline;
                }    
                @media(min-width: ${props => props.theme.screenSize.desktop}){
                    font-size: 20px;
                    padding: 30px 35px;
                }           
            }
            a{
                text-decoration: none;
                background-color: ${props => props.theme.blue};
                margin: 30px 23px 0px;
                text-align: center;
                display: block;   
                padding: 15px 0; 
                font-weight: 700 ;
                font-size: 14px;
                transition: ease .3s;
                &:hover{
                    background-color: ${props => props.theme.green};
                }
                &:visited{
                    color: #FFF;
                }
                @media(min-width: ${props => props.theme.screenSize.desktop}){                    
                    width: 220px;
                    font-size: 20px;
                    margin: 30px 35px 0px;
                }   
            }
            @media(min-width: ${props => props.theme.screenSize.desktop}){
                width: 55%;
            }  
            
        }
    };
    h3{
        position: relative;
        span{
            &::before{
                content: " ";
                position: absolute;
                top:40px;                 
                width:40px;
                height: 5px;
                background-color: ${props => props.theme.green};
                @media(min-width: ${props => props.theme.screenSize.desktop}){
                    top: 52px;
                    width:56px;
                    height: 7px
                }  
            }

        }
    }
`