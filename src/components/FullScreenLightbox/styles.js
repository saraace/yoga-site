import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const Lightbox = styled(motion.div)`
    display: flex; 
    align-items: center;
    padding: 68px 0 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:after{
        content: ""; 
        position: absolute; 
        top: 0; 
        left: 0; 
        bottom: 0; 
        right: 0; 
        background: linear-gradient(0deg, rgba(29, 46, 72, 0.5), rgba(29, 46, 72, 0.5)), rgba(0, 0, 0, 0.8);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        z-index: -1;
    }
`;

export const LightboxControls = styled.div`
    position: absolute;
    display: flex; 
    top: 120px;
    right: 50px;
`;

export const CloseButton = styled.span`
    cursor: pointer; 
`; 

export const ResetButton = styled.span`
    cursor: pointer; 
    opacity: 0.8;
    margin: 0 0 0 20px;

    &:hover{
        opacity: 1;
    }
`; 