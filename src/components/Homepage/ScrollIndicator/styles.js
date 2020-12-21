import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Indicator = styled.div`
    position: -webkit-sticky; 
    position: sticky; 
    height: 0px;
    line-height: 0;
    z-index: 1;
    display: flex; 
    justify-content: center;
`; 

export const LargeCircle = styled(motion.div)`
    width: 122px; 
    height: 122px;  
    border-radius: 50%;
    position: relative;
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