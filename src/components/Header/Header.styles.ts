import styled from 'styled-components'

export const HeaderWrapper =  styled.header`
   height: 100vh;
    //min-height: -webkit-fill-available;
    //height: calc(100vh - calc(100vh - 100%));
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15%;
    h2{
        margin-block-end: 0;
        margin-block-start: 0;
        text-align: right;
        margin-top: -20px ;
    }
    img{
        float: right;
        width: 109px;
        margin-bottom: -6px;
    }
    svg{
        position: absolute;
        bottom: 15%;
    }   
`

export const Subtitle = styled.div`
    h1, p {
        font-weight: 300;
        font-size: 24px;
        margin-block-end: 0;
        margin-block-start: 0;
        //text-align: center;
    }
    h1{
        margin-top: 5px
    }
    h2{
        font-weight: 300;
    }
`