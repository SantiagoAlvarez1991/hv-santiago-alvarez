import { styled } from "styled-components";

export const LanguagesWrapper = styled.section`
    margin: 0 3%;
    padding: 0 23px 23px;
    background-color: #FFF;
    div{
        display: flex;
    }
`



export const LanguageCard = styled.article`
    padding: 0 30px;
    border-left: solid 1px ${props => props.theme.textColor};
    p{
        display: block;
        margin: 5px 0;
        &:first-child{
           font-size: 13px;
           font-weight: 700;
        }
        &:last-child{
            font-size: 13px;
            font-weight: 400;
            
        }
    }
    &:first-child{
        padding: 0 30px 0 0;
        border-left: none;
    }
`