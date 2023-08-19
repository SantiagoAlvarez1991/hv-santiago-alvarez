import { styled } from "styled-components";

export const Main = styled.main`

`

export const ExperienceAndTraining = styled.div`
    
    
    width: 100%;
    max-width: ${props => props.theme.screenSize.desktopXL};
    @media(min-width: ${props => props.theme.screenSize.desktop}){
        display: flex;
        flex-direction: row;
        margin: 0 auto;        
        >section{
            width: 57%;
        }
        >div{
            width: 43%;
        }
    }

`