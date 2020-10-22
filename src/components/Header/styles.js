import styled from '@emotion/styled';
import { motion } from "framer-motion";

const PageHeader = styled(motion.header)`
    top: 0;
    left: 0; 
    right: 0;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    padding: 40px 24px;
    position: relative;
    z-index: 200;
    
    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 44px 64px;
    }

    &.sticky{
        padding: 20px 24px;
    }
`;

export const LogoCol = styled.div`
    z-index: 1;
    width: 250px;

    a{
        position: relative;
    }
`;

export const LogoWrapper = styled(motion.div)`
    position: absolute;
    //top: 50%;
    //transform: translateY(-50%);
`; 

export const NavCol = styled.div`
    display: none; 
    
    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: block;
    }
`;

export const ButtonCol = styled.div`
    display: none; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: block;
        width: 250px;
    }
`;

export const MobileNavCol = styled.div`

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: none;
    }
`; 

export default PageHeader;