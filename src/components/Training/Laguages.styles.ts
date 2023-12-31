import { styled } from "styled-components";

export const LanguagesWrapper = styled.section`
    margin: 0 3%;
    padding: 0 23px 23px;
    background-color: #FFF;
    div{
        display: flex;
    }
    @media (min-width: ${props => props.theme.screenSize.desktop}){
        background-color: ${props => props.theme.softBackground};
        margin-bottom: 40px;
    }
`



export const LanguageCard = styled.article`
    padding: 0 30px;
    border-left: solid 1px ${props => props.theme.textColor};
    p{
        display: block;
        margin: 5px 0;
        font-size: 13px;
        &:first-child{
           font-weight: 700;
           @media (min-width: ${props => props.theme.screenSize.desktop}){
            font-size: 20px;
           }
        }
        &:last-child{            
            font-weight: 400;            
            @media (min-width: ${props => props.theme.screenSize.desktop}){
             font-size: 16px;
            }
        }
    }
    &:first-child{
        padding: 0 30px 0 0;
        border-left: none;
    }
`