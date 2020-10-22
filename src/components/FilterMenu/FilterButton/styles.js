import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Link = styled.div`
    align-items: center; 
    cursor: pointer;
    transition: 0.3s all ease;
    display: none;

    svg{
        width: 14px; 
        margin: 0 13px 0 0;

        path{
            fill: ${({ theme }) => theme.colors.primary};
        }
    }
    & > div{
        display: flex;
        text-transform: uppercase; 
        color: ${({ theme }) => theme.colors.primary};
        line-height: 1;
        font-weight: 700;

        & > div{
            margin: 0 0 0 10px;
        }
    }

    &:hover{
        opacity: 0.5;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        display: flex; 
    }
`;

export const Button = styled(motion.div)`
    display: flex; 
    align-items: center; 
    cursor: pointer;
    transition: 0.3s all ease;
    position: fixed;
    bottom: 50px;
    left: 50%; 
    transform: translateX(-50%);
    z-index: 10;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 15px 31px;
    border-radius: 168px;
    box-shadow: 0 0 24px 0 rgba(255, 239, 169, 0.5), rgba(255, 255, 255, 0.4) 0 0 12px 0 inset;

    svg{
        width: 14px; 
        margin: 0 13px 0 0;

        path{
            fill: ${({ theme }) => theme.colors.background};
        }
    }
    & > div{
        display: flex;
        text-transform: uppercase; 
        color: ${({ theme }) => theme.colors.background};
        line-height: 1;
        font-weight: 700;

        & > div{
            margin: 0 0 0 10px;
        }
    }

    &:hover{
        opacity: 0.5;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        display: none;
    }
`;