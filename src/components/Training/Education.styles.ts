import { styled } from "styled-components";

export const EducationWrapper = styled.section`
    position: relative;
    margin: 0 3%;
    padding: 0 23px 23px;
    background-color: #FFF;
     h4 {      
        padding-bottom: 8px ;
         &::before{          
            background-color: ${props => props.theme.gray};
            @media (min-width: ${props => props.theme.screenSize.desktop}){
                top: 52px;
            }
        }           
    }
    @media (min-width: ${props => props.theme.screenSize.desktop}){
        background-color: ${props => props.theme.softBackground};
        margin-bottom: 40px;
    }
`

export const EducationCard = styled.article`
    border-top: solid 1px ${props => props.theme.textColor};
    margin-bottom: 35px;    
    p{
        margin: 3px 0;
        &:nth-child(1){
            font-size: 16px;
            font-weight: 900;
            @media (min-width: ${props => props.theme.screenSize.desktop}){
                font-size: 18px
            }
        }
        &:nth-child(2){
            font-size: 18px;
            font-weight: 300;
            @media (min-width: ${props => props.theme.screenSize.desktop}){
                font-size: 20px
            }
        }
        &:nth-child(3),  &:nth-child(4){
            font-size: 13px;
            font-weight: 700;
        }              
    }
    &:last-of-type{
        margin-bottom: 0;
    }
    @media (min-width: ${props => props.theme.screenSize.desktop}){
        margin-right: 90px;}
    
`