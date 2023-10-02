import styled from "styled-components"

interface Image{
    $url: string;
}

export const GalleryWrapperOne = styled.div`
    width: 100%;    
    display: flex;
    gap: 10px;    
    height: 171px;    
    overflow-x:scroll;
    scroll-snap-type: x mandatory;  // para configurar el tipo de scroll horizontal tipo imán(mandatory) 
    //white-space:nowrap
    
`

export const ImageWrapperOne = styled.div<Image>`
    //display: inline-block;
    border-radius: 5px;
    background-color: red;    
    flex-basis: 300px;
    flex-shrink: 0;
    height: 100%;
    background-image: url(${props => props.$url});
    background-size: cover;
    //white-space:nowrap;
    scroll-snap-align: start;    //al hacer scroll me ubica al inicio de cada elemento
`
