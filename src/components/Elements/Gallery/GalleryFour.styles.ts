import styled from "styled-components";


export const GalleryWrapperD = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding: 0 3% ;
    article{
        width: 210px;
        height: 150px;
        flex-shrink: 0;
        border-radius: 10px;
        overflow: hidden;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 112px;
    overflow: hidden;
    position: relative;
    div{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.textColor};
        z-index: 1;
        opacity: 0.2;
        backdrop-filter: blur(10px);        
    }
    img{
        width: 100%;
        object-fit: cover;   
        filter: blur(1px);
        transform: scale(105%)
    }
`

export const TitleWrapper = styled.div`
    width: 100%;
    height: 38px;
    background-color: ${props => props.theme.blue};
    display: flex;
    //flex-direction: column;
    //justify-content: center;
    align-items: center;
    padding: 15px;
    p{
        color: #FFF;
        margin: 0;
        font-weight: 700;
        font-size: 1.2rem;
    }
`

export const SkeletonProject = styled.article`
    width: 210px;
    height: 150px;
    flex-shrink: 0;
    border-radius: 10px;
    div{
        &:first-of-type{
            width: 100%;
            height: 112px;
            //background-color: ${props => props.theme.softBackground};
            background-color: ${props => props.theme.gray};
            opacity: 0.15;
        }
        &:last-of-type{
            width: 100%;
            height: 38px;
            //background-color: ${props => props.theme.softTextColor};
            background-color: ${props => props.theme.gray};
            opacity: 0.4;
            display: flex;            
            align-items: center;
            padding: 15px;
        }
    }
    p{
        //color: ${props => props.theme.gray};
        font-weight: 700;
        font-size: 1.2rem;
    }
`