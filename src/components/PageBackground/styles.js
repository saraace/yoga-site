import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const BackgroundImage = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0; 
    right: 0; 
    min-height: 457px;
    z-index: -100;

    img{
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;
        object-fit: cover;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            object-fit: fill;
            position: static;
            height: auto;
        }
    }

    &:after{
        content: ""; 
        position: absolute; 
        top: 0; 
        bottom: 0;
        left: 0; 
        right: 0; 
        background: radial-gradient(170.46% 170.46% at 47.92% -70.46%, #456696 0%, #0B1525 100%);
        opacity: 0.6;
    }
`;