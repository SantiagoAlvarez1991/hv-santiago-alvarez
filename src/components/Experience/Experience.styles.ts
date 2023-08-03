import { styled } from "styled-components";

export const ExperienceWrapper = styled.section`
    margin: 15px 3% 0;
    padding: 23px;
    background-color: #FFF;
    border-radius: 15px 15px 0 0;
    position: relative;
    h4 {          
         &::before{          
            background-color: ${props => props.theme.green};
            top: 55px;
            @media (min-width: ${props => props.theme.screenSize.desktop}){
                top: 124px
            }
        }           
    }
    @media (min-width: ${props => props.theme.screenSize.desktop}){
        padding: 72px 30px 55px 130px;
    }
`

export const ExperienceCard = styled.article`
    font-size: 12px;
    margin-bottom: 20px;
    ul{
        padding: 0 0 0 20px;        
    };
    &:last-of-type{
        margin-bottom: 0px;
    }   
    @media (min-width: ${props => props.theme.screenSize.desktop}){
        font-size: 14px;
        margin-bottom: 35px;
    }
`

export const TitleWrapper = styled.div`
    border-bottom: solid 1px ${props => props.theme.textColor};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 8px 0;   
    p{
        margin: 5px 0 0 0;
        &:nth-child(1){
            //margin: 5px 0 0 0;
            font-weight: 800;
            font-size: 18px;
            width: 100%;
            color: ${props => props.theme.green};
            @media (min-width: ${props => props.theme.screenSize.desktop}){
                font-size: 24px;
            }
        };
        &:nth-child(2){            
            font-weight: 700;
            font-size: 13px;
            @media (min-width: ${props => props.theme.screenSize.desktop}){
                font-size: 14px;
            }
        };
        &:nth-child(3){
            font-weight: 400;
            font-size: 13px;
            @media (min-width: ${props => props.theme.screenSize.desktop}){
                font-size: 16px;
            }
        };
    }
`
export const AboutWrapper = styled.div`   
    div{
        &:nth-child(1){
            p{
                font-weight: 500;
                margin: 10px 0;
                @media (min-width: ${props => props.theme.screenSize.desktop}){
                    font-size: 14px;
                    font-weight: 300;
                    margin: 20px 0;
                }
            }
            @media (min-width: ${props => props.theme.screenSize.desktop}){
                width: calc(37% - 30px) 
            }
        }       
        &:nth-child(2){
            > p{
                &:nth-child(2){
                    margin: 5px 0 0 0;
                }
            }
            @media (min-width: ${props => props.theme.screenSize.desktop}){
                width: 63%;
            }
        }       
    }
    @media (min-width: ${props => props.theme.screenSize.desktop}){
        display: flex;
        gap: 30px;
    }
   
`

export const InnerSubtitle = styled.p`
    font-weight: 800;
    font-size: 13px;
    margin: 20px 0 0 0;
    @media (min-width: ${props => props.theme.screenSize.desktop}){
        font-size: 14px;
    }
    
`

export const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
    font-size: 12px;
    p{
        margin: 0;
        padding: 5px 10px;
        background-color: ${props => props.theme.lightGreen};
        color: #FFF;
        border-radius: 8px;
    }

`