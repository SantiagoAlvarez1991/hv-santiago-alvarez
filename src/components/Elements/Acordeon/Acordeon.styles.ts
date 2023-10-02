import styled, { css } from "styled-components"

interface Acordeon {
    $isActive: boolean;
}

interface AcordeonChildren {
    $isActive: boolean;
    $maxHeightMobile: string;
    $maxHeightDesktop: string
}


export const AcordeonWrapper = styled.article<Acordeon>`
    background-color: #FFF;
    padding: 12px 22px;    
    border-radius: 10px;  
    position: relative;   
    margin-bottom: 12px ;
    svg{
        display: initial;
        font-size: 15px;       
        transition: transform .2s ease-out;
        ${props => props.$isActive && css`
            transform: rotate(0.5turn);
        `}
        @media (min-width: ${props => props.theme.screenSize.desktop}) {
            display: none;
        }
    }
`
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;    
`

export const AcordeonChildren = styled.div<AcordeonChildren>`    
    max-height: ${props => props.$isActive ? props.$maxHeightMobile : '0px'};
    overflow-y: hidden;
    transition: max-height .5s ease;
    font-size: 1.2rem;    
    @media (min-width: ${props => props.theme.screenSize.desktop}) {
        max-height: ${props => props.$maxHeightDesktop}
    }

`