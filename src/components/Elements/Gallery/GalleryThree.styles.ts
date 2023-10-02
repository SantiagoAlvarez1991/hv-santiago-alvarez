import { styled } from "styled-components";


export const GalleryWrapperC = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 15px 0;
`

export const CarruselC = styled.div`
    scroll-snap-type: x mandatory; 
    display: flex; 
    height: calc(50vw - 3.3vh);
    overflow-y: hidden;
`

export const ImageWrapperC = styled.article`
    width: 100%;
    flex-shrink: 0; // todos los elementos se van a encoger en la misma medida, en este caso como es 0 no se van a encoger, tomarán todos el mismo tamaño
    scroll-snap-align: start;
`

export const ImageC = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left top;
`
