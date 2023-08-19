import { css, styled } from "styled-components";

interface AboutMePharagraph {
    $isActive : boolean
}

export const AboutMe = styled.section<AboutMePharagraph>`
    margin-bottom: 16px ;
    div{
        background-color: #FFF;
        padding: 12px 22px;
        position: relative;
        border-radius: 10px;        
        svg{
            display: initial;
            position: absolute;
            top: 20px;
            right: 22px;
            font-size: 15px;       
            transition: transform .2s ease-out;
            ${props => props.$isActive && css`
                transform: rotate(0.5turn);
            `}
            @media (min-width: ${props => props.theme.screenSize.desktop}) {
                display: none;
            }
        }
    }
`

export const AboutMePharagraph = styled.article<AboutMePharagraph>`    
    max-height: ${props => props.$isActive ? '300px' : '0px'};
    overflow-y: hidden;
    transition: max-height .5s ease;
    font-size: 1.2rem;
    P{

        &:first-of-type{
            font-size: 1.3rem;
            font-weight: 500;
            span{
                text-decoration: underline;
            }
        }
    }
    @media (min-width: ${props => props.theme.screenSize.desktop}) {
        max-height: 400px
    }

`

export const Technologies = styled.section`
    padding: 12px 22px;
    background-color: ${props => props.theme.textColor};
    border-radius: 10px;    
    h3{
        //color: ${props => props.theme.gray};
        color: rgba(255,255,255, .4)
    }
    ul{
        color: ${props => props.theme.lightGreen};
        font-size: 2rem;
        font-weight: 300;
        list-style: none;
        padding: 0;
        margin: 10px 0;
        li{
            display: inline-flex;
            margin-right: 45px;
            margin-top: 24px;
           
        }
    }
`