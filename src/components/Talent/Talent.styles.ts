import { styled } from "styled-components";

export const TalentWrapper = styled.section`    
    margin: 0% 3%;
    color: #fff;
    border-radius: 15px;
    padding: 23px;
    background-color: ${props => props.theme.textColor};
   
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
    }
`

export const Skills = styled.article`
    position: relative;
    h4 {    
        font-weight: 800 ;
        &::before{          
            background-color: ${props => props.theme.yellow};
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
    }
`