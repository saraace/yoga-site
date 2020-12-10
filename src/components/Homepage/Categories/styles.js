import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const FullScreen = styled.div`
    height: 100vh; 
    overflow: hidden;

    & > div{
        height: 100%;
        background-image: url(/images/homepage/scene-08/bg.png); 
        background-size: cover; 
        background-position: center; 
        display: flex;
        align-items: flex-end; 
        position: relative;
    }
`; 

export const VideoWrapper = styled.div`
    position: absolute;
    top: 0; 
    bottom: 0;
    left: 0; 
    right: 0; 
    overflow: hidden;

    video{
        position: absolute;
    }
`; 

export const Content = styled(motion.div)`
    width: 100%; 
    padding: 0 0 120px;
    position: relative; 
    z-index: 1;
`;

export const Renew = styled(motion.div)`
    font-weight: 700; 
    font-size: 64px; 
    line-height: 1.12;
    text-shadow: -1px 1px 0px rgba(0, 0, 0, 0.15);
`;

export const Shift = styled(motion.div)`
    text-align: center;
    font-weight: 900;
    font-size: 200px; 
    line-height: 1.12;
    text-shadow: -1px 1px 0px rgba(0, 0, 0, 0.15);
`;

export const Transform = styled(motion.div)`
    text-align: right;
    font-weight: 700; 
    font-size: 64px; 
    line-height: 1.12;
    text-shadow: -1px 1px 0px rgba(0, 0, 0, 0.15);
    margin-bottom: 166px;
`;

export const Row = styled(motion.div)`
    display: flex;
    justify-content: center; 
`;

export const Disipline = styled.div`
    text-transform: uppercase; 
    font-weight: 700; 
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
    margin: 0 24px;
    position: relative;

    &::after{
        content: ""; 
        position: absolute;
        height: 4px; 
        left: 0; 
        right: 0;
        bottom: -5px;
        border-radius: 27px;
    }
`; 

export const Yoga = styled(Disipline)`
    &::after{
        background: ${({ theme }) => theme.colors.yoga}; 
    }
`;

export const Fiit = styled(Disipline)`
    &::after{
        background: ${({ theme }) => theme.colors.fiit}; 
    }
`;

export const Restore = styled(Disipline)`
    &::after{
        background: ${({ theme }) => theme.colors.restore}; 
    }
`;