import styled from "styled-components"

interface Image {
    $url: string;
}

interface Carrusel {
    $currentImage: number
}

export const GalleryGrapperB = styled.div` 
display: flex ;
flex-direction: column;
gap: 8px;
    //width: 100%;
    
`

export const CarruselB = styled.div<Carrusel>`
        position: relative;
        overflow-x: hidden;
        div{ 
            transform: translate(calc(((94vw - 44px) * ${props => -Math.abs(props.$currentImage)}) /2));        
            transition: transform 0.5s ease;         
            display: flex;
        }
        button{
            position: absolute;
            margin:auto;
            top: 0;
            bottom: 0;
            height: 30px;
            &:first-of-type{
                left: 0;
            }
            &:last-of-type{
                right: 0;
            }        
    } 
        
`

export const ImageB = styled.div<Image>` 
flex-shrink:0 ;
    border-radius: 5px;
    background-color: red;  
    width: calc(94vw - 44px) ;
    height: calc(50vw - 3.3vh);
    display: inline-block;
    background-image: url(${props => props.$url});
    background-size: cover;
    scroll-snap-align: start;    //al hacer scroll me ubica al inicio de cada elemento
`
