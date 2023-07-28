import { styled } from "styled-components";

export const ExperienceWrapper = styled.section`
    margin: 15px 3% 0;
    padding: 23px;
    background-color: #FFF;
    border-radius: 15px;
    position: relative;
    h4 {          
         &::before{          
            background-color: ${props => props.theme.green};
            top: 55px
        }           
    }
`

export const ExperienceCard = styled.article`
    font-size: 12px;
    margin-bottom: 20px;
    ul{
        padding: 0 0 0 20px;        
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
            color: ${props => props.theme.green}
        };
        &:nth-child(2){            
            font-weight: 700;
            font-size: 13px;
        };
        &:nth-child(3){
            font-weight: 400;
            font-size: 13px;
        };
    }
`
export const AboutWrapper = styled.div`   
    div{
        &:nth-child(1){
            p{
                font-weight: 500;
                margin: 10px 0;
            }
        }       
        &:nth-child(2){
            > p{
                &:nth-child(2){
                    margin: 5px 0 0 0;
                }
            }
        }       
    }
   
`

export const InnerSubtitle = styled.p`
    font-weight: 800;
    font-size: 13px;
    margin: 20px 0 0 0;
    
`

export const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin: 10px 0;
    p{
        margin: 0;
        padding: 5px 10px;
        background-color: ${props => props.theme.lightGreen};
        color: #FFF;
        border-radius: 8px;
    }

`