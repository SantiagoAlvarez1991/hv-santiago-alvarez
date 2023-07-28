import styled from 'styled-components'

export const AboutWrapper = styled.section`
    padding: 7% 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    gap: 10px;       
    div{
        &:first-child{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            img{
                width: 190px;
            }
            div{
                padding-top: 30px;
            }
            svg{
                display: block;
                margin-top:10px ;
            }            
        }
        &:last-child{   
            width: 100%;         
            h3, p {
                padding: 0 23px;
            }
            p{
                font-size: 13px;
                font-weight: 400;
            }
            p:first-of-type{
                background-color: ${props => props.theme.softBackground};
                border-radius: 15px;
                padding: 23px;
                font-size: 14px;
                font-weight: 600;
                span{
                    text-decoration: underline;
                }              
            }
            a{
                text-decoration: none;
                background-color: ${props => props.theme.blue};
                margin: 30px 23px 0px;
                text-align: center;
                display: block;   
                padding: 15px 0; 
                font-weight: 700 ;
                &:visited{
                    color: #FFF;
                }
            }
            
        }
    };
    h3{
        position: relative;
        span{
            &::before{
                content: " ";
                position: absolute;
                top:40px;                 
                width:40px;
                height: 5px;
                background-color: ${props => props.theme.green};
            }
        }
    }
`