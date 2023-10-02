import { styled } from "styled-components";

export const ExperienceWrapper = styled.section`
    background-color: ${props => props.theme.softBackground};
    padding: 3%;
    
    h3{
        padding: 0px 22px 12px;
    }
`



export const ExperienceDescription = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;     
    margin: 5px 0 ;
    p{
        font-size: 1.2rem;        
        &:nth-of-type(2){
            opacity: 60%;
            font-weight: 500;
            margin: 0;
        };
        &:nth-of-type(3){
            font-weight: 300;
            margin: 0;
        }

    }
`
export const Title = styled.p`
    font-size: 1.5rem !important;
    font-weight: 800;
    flex-basis:100%;
    flex-shrink: 0;
    margin: 0 0 6px;
`
export const ExperienceAbout = styled.p`
    border-top: 1px solid ${props => props.theme.gray}; 
    font-size: 1.2rem;
    padding-top: 12px;
    font-weight: 400;
`

export const ExperienceSubtitle = styled.p`
    font-size: 1.3rem;
    font-weight: 700;
    margin: 15px 0 0 ;
    +p{
        font-size: 1.2rem;
        margin: 6px 0 0; 
        font-weight: 400;
    }
    +ul{
        padding: 0 0 0 15px;
        margin: 6px 0 0; 
        li{
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
`

export const ExperienceTechnologies = styled.ul`
    list-style: none;
    padding: 0 !important;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0 !important ;
    li{
        padding: 5px 10px;
        background-color: ${props => props.theme.lightGreen};
        border-radius: 8px;
        color: #FFF;
    }
`