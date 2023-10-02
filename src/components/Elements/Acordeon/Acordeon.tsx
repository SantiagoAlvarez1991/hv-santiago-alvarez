import { FaAngleDown } from "react-icons/fa"
import { FC, ReactNode, useState } from 'react';
import { AcordeonWrapper, AcordeonChildren, Title } from "./Acordeon.styles";

interface Acordeon {
    children: ReactNode;
    maxHeightMobile: string;
    maxHeightDesktop: string;
    titleBox: ReactNode
}
const Acordeon : FC<Acordeon> = ({children, maxHeightMobile, maxHeightDesktop, titleBox}) => {

    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <AcordeonWrapper $isActive={isActive}>  
            <Title>     
                <>{titleBox}</>   
                <FaAngleDown onClick={() => setIsActive(prevState => !prevState)} />
            </Title>    
            <AcordeonChildren $isActive={isActive} $maxHeightMobile={maxHeightMobile} $maxHeightDesktop={maxHeightDesktop}>
                {children}
            </AcordeonChildren>
        </AcordeonWrapper>
    )
}

export default Acordeon
