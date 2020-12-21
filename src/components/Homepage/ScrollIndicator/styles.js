import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';
import { motion } from "framer-motion";

export const Indicator = styled.div`
    position: -webkit-sticky; 
    position: sticky; 
    height: 0px;
    line-height: 0;
    z-index: 10;
    display: flex; 
    justify-content: center;
`; 

export const LargeCircle = styled(motion.div)`
    width: 122px; 
    height: 122px;  
    border-radius: 50%;
    position: relative;
    z-index: 1;
`;

export const SmallCircle = styled(motion.div)`
    width: 84px; 
    height: 84px; 
    background: rgba(255, 255, 255, 0.5); 
    border-radius: 50%; 
    position: absolute;
    top: 19px;
    left: 19px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .svg{
        width: 17px;
        padding: 14px 0 0 0;

        svg{
            width: 100%;
        }
    }
`;

const m2 = keyframes`
    0%, 50%, 60%{
        transform: scaleY(0.118)
    }
    30%{
        transform: scaleY(1)
    }
    0%, 29.99%{
        transform-origin: top
    }
    30%, 100%{
        transform-origin: bottom
    }
    90%, 100%{
        transform: scaleY(0.118) translateY(-106px)
    }
`;

export const Mouse = styled.div`
    width: 20px;
    height: 30px;
    border-radius: 20px;
    opacity: 0.8;
    border: 2px solid ${({ theme }) => theme.colors.background};
    position: absolute;
    top: 5px;

    &:before, &:after{
        content: '';
        display: block;
        position: absolute;
    }

    &:before{
        width: 2px;
        height: 15px;
        border-radius: 2px;
        top: 4px;
        left: calc(50% - 1px);
        background: ${({ theme }) => theme.colors.background};
        animation: ${m2} 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
    }
`;