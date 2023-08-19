import { styled } from "styled-components";

export const FooterWrapper = styled.footer`
    text-align: center;
    background-color: ${props => props.theme.textColor};
    padding: 25px 0;
    color:  ${props => props.theme.gray};
    font-size: 12px;
    span{
        font-weight: 800;
    }
`