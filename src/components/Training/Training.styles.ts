import { styled } from "styled-components";

export const TrainingWrapper = styled.div`
     @media (min-width: ${props => props.theme.screenSize.desktop}){
        background-color: ${props => props.theme.softBackground};
        border-radius: 20px;
        margin-top: 37px;
        padding: 50px 20px 32px;
        margin-right: 3%;
    }
`