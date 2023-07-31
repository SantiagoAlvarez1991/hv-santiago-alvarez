import styled from "styled-components";

export const ToolsWrapper = styled.section`
    margin: 0 3%;
    padding: 0 23px 23px;
    background-color: #FFF;
    font-size: 13px;
    font-weight: 400;
    border-radius: 0 0 15px 15px;
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li{
        margin-bottom: 20px;
        &:last-child{
            margin-bottom: 0;
        }
    }
    img{
        margin-right: 10px;
    }
`