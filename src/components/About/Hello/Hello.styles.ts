import { styled } from "styled-components";

export const Wellcome = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 30px;
    //width: 100vw;
    p{
        font-size: 11.3rem;        
        font-weight: 900;
        color: ${props => props.theme.gray};
        margin: 0;
        //flex-grow: 1;
    }
    div{
        margin-bottom: 33px;
        padding-left: 15px;
        border-left: 1px  ${props => props.theme.gray} solid ;
        //flex-grow: 1;
        svg{
            width: 28px;
        }
    }
`
export const ImageWrapper = styled.div`
    background-color: ${props => props.theme.blue};
    position: relative;
    padding: 15px 27px 15px 210px;
    margin-top: -18px;
    border-radius: 10px;
    img{
        position: absolute;
        height: 200px;
        bottom: 0;
        left: 0;
    }
    p{
        font-size: 1.2rem;
        font-weight: 400;
        color: #FFF;
    }
    span{
        font-size: 1.2rem; 
        font-weight: 700;
        text-decoration: underline;
    }
   
   
`

export const ContactWrapper = styled.div`
       
    margin: 12px 0;
    display: flex;
    gap: 10px;
    a, button {         
        padding: 12px 0;
        font-weight: 800;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        svg{
            font-size: 16px;
        }
        span{
            font-size: 1.2rem; 
        }
    }    
    a{
        text-align: center;
        background-color: ${props => props.theme.green};
        text-decoration: none;
        color: #FFF;

        // flex-grow: reparte espacio entre segun el número que se le coloque, entre más alto el número, va a ocupar mas espacio, todos los hijos deben tener esta propiedad
        // flex-shrink: entre más alto el número, se va a encoger más que los demás
        // flex-basis: una medida que sirve como base para el elemento. 
        // si la medida del contendor padre es menor al basis, el hijo se adapta al tamaño del padre, si la medida padre es mayor, entonces el hijo tomará la medida base

        flex-grow: 1;        
        &:visited{
            color: #FFF;
        }
    }
    button{        
        font-family: 'Red Hat Display', sans-serif;
        border: 1px solid ${props => props.theme.gray};
        background-color: transparent;           
        color: ${props => props.theme.gray} ;
        flex-grow: 1;        
    }
    
`
