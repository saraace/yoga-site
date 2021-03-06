import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MobileNavWrapper = styled(motion.div)`
    position: fixed; 
    top: 0; 
    left: 0; 
    right: 0; 
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);  
    background-color: rgba(14, 38, 73, 1);
    overflow: hidden;
`;

export const ToggleButton = styled(motion.div)`
    width: 24px; 
    height: 24px;
    position: relative;
    cursor: pointer;
    z-index: 100;

    & > div:first-of-type, 
    & > div:last-child{
        position: absolute; 
        height: 2px; 
        width: 20px; 
        background: ${({ theme }) => theme.colors.text}; 
        border-radius: 1px;
    }

    & > div:first-of-type{
        top: 8px;
        right: 0;
    }

    & > div:last-child{
        top: 15px;
    }
`; 

export const NavMenu = styled.ul`
    margin: 128px 24px 0; 
    padding: 0; 
    list-style: none; 

`;

export const NavItem = styled.li`
    line-height: 1;
    margin: 0 0 32px;
`; 

export const NavLink = styled.a`
    text-decoration: none; 
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    text-transform: uppercase;
    line-height: 1;
`;