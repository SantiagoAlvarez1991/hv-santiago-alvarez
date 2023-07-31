import { styled } from "styled-components";

export const ContactWrapper = styled.section`
    
    h4{
        color: ${props => props.theme.gray};
        text-align: center;
    }
    form{
        margin: 15px 3% 0;
        padding: 18px 23px 23px;
        background-color: #FFF;
        border-radius: 15px;
                
        label{
            display: block;
            margin-bottom: 5px;
            margin-top: 20px;
            font-size: 16px;
            font-weight: 400;
        }
        input, textarea{
            font-family: 'Red Hat Display', sans-serif;
            font-weight: 600;
            font-size: 14px;
            width: 100%;
            border: none;
        }
        input{            
            border-bottom: solid 1px ${props => props.theme.textColor};  
            padding: 6px 0px ;
            &::placeholder{
                color: rgba(69,90,100, .4);
            }
            &:focus{
                outline: none;
                border-bottom: solid 1px ${props => props.theme.lightGreen};                
                background-color: rgba(106,219,216, .14);
            }
        }        
        textarea{
            background-color: rgba(69,90,100, .1);
            padding: 12px;
            resize: none;
            height: 120px;
            &::placeholder{
                color: rgba(69,90,100, .4);
            }
            &:focus{
                outline: none;
                border: solid 1px ${props => props.theme.lightGreen};
            }
        }
    }
    section{
        display: flex;
        justify-content: center;
        gap: 15px;
        margin: 25px 0;
        svg{
            width: 30px;
        }
    }
`

export const Button = styled.button`    
    font-family: 'Red Hat Display', sans-serif;
    background-color: ${props => props.theme.blue};
    width: 100%;
    margin-top: 16px;
    text-align: center;    
    padding: 15px 0; 
    border: none;
    color: #fff;
    font-weight: 700 ;
    font-size: 14px;
`