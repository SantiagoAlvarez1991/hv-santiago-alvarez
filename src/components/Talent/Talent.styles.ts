import { styled } from "styled-components";

export const TalentWrapper = styled.section`
    //box-sizing: border-box;
    width: 94%;
    max-width: ${props => props.theme.screenSize.desktopXL};
    display: flex;   
    flex-direction: column;
    max-width: calc(${props => props.theme.screenSize.desktopXL} - 6%);
    //margin: 0% 3%;
    margin: 0 auto;
    color: #fff;
    border-radius: 15px;
    padding: 23px;
    background-color: ${props => props.theme.textColor};
    @media (min-width: ${props => props.theme.screenSize.desktop}){
        flex-direction: row;
        padding: 40px;        
    }
   
`

export const Technologies = styled.article`
    h4{
        text-align: center;
    }
    p{
        font-size: 24px;
        font-weight: 300;
        color: ${props => props.theme.lightGreen};
        display: inline-block;        
        margin: 0 32px 28px 0;
        @media (min-width: ${props => props.theme.screenSize.desktop}){
            font-size: 36px; 
            margin: 30px 60px 20px 60px;      
        }
    }
    @media (min-width: ${props => props.theme.screenSize.desktop}){
        width: 63%;
        text-align: center;
        padding-right: 40px;
    }
`

export const Skills = styled.article`
    position: relative;
    h4 {    
        font-weight: 800 ;
        &::before{          
            background-color: ${props => props.theme.yellow};            
            @media (min-width: ${props => props.theme.screenSize.desktop}){
                top:100px;
            }
        }   
        @media (min-width: ${props => props.theme.screenSize.desktop}){
            margin-bottom: 40px;
        }        
    }
    p {
        color: ${props => props.theme.softTextColor};
        font-size: 12px;
        padding: 12px 20px;
        background-color: rgba(34,37,38, .2);
        font-weight: 500;
        display: inline-block;
        margin: 5px 10px 5px 0;
        @media (min-width: ${props => props.theme.screenSize.desktop}){
            font-size: 16px;
        }
    }
    @media (min-width: ${props => props.theme.screenSize.desktop}){
        width: 37%;
        padding: 48px 0 0 0 
    }
`