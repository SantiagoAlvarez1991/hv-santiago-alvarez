import styled from "styled-components"


interface Bullet {
    $isActive : boolean
}


export const BulletWrapper = styled.div`
    display: flex;
    gap: 8px;
    bottom:0;
    align-self: center;   
`

export const Bullet = styled.div<Bullet>`
    background-color: ${props => props.$isActive ? props.theme.textColor : props.theme.gray};
    width: 10px;
    height: 10px;
    border-radius: 50%;
`