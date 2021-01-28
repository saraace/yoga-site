import styled from '@emotion/styled';
import { motion } from "framer-motion";
import { Container } from "theme-ui";

export const FullScreen = styled.div`
    height: 100vh; 
    min-height: 700px;
    overflow: hidden;

    & > div{
        height: 100%;
        background-image: url(/images/homepage/yoga-seq/mobile/Mobile_Pag9%2024fps000.jpg); 
        background-size: cover; 
        background-position: center; 
        display: flex;
        align-items: flex-end; 
        position: relative;
    }
`; 

export const VideoWrapper = styled(motion.div)`
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

export const SeqWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0; 
    left: 0; 
    right: 0;
`; 

export const Gradient = styled(motion.div)`
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0;

    &:before{
        content: ""; 
        position: absolute; 
        bottom: 0; 
        left: 0; 
        right: 0;
        z-index: 10;
        height: 20%;
        background: linear-gradient(180deg, rgba(99, 126, 141, 0) 0%, #184058 100%);
        opacity: 0.5;
    }

    &:after{
        content: ""; 
        position: absolute; 
        top: 0; 
        left: 0; 
        right: 0;
        z-index: 10;
        height: 20%;
        background: linear-gradient(180deg, #184058 0%, rgba(99, 126, 141, 0) 100%);
        opacity: 0.5;
    }
`;

export const TextContainer = styled(Container)`
    height: 100%; 
    display: flex; 
    align-items: center;
    position: relative; 
    z-index: 1;
`;

export const Content = styled(motion.div)`
    height: 100%; 
    width: 100%;
    padding: 0px 0 90px;
    position: relative; 
    z-index: 1;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`;

export const Text = styled.div`
    height: 100%;
    display: flex; 
    flex-direction: column;
    padding: 150px 0 0;
    position: relative;
`; 

export const Row = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center; 
`;

export const Categories = styled(motion.div)`
    display: flex; 
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 0;
`;

export const Renew = styled(motion.div)`
    font-weight: 700; 
    font-size: 32.36px; 
    line-height: 1.12;
    text-shadow: -1px 1px 0px rgba(0, 0, 0, 0.15);
`;

export const Shift = styled(motion.div)`
    text-align: center;
    font-weight: 900;
    font-size: 110px; 
    line-height: 1.12;
    text-shadow: -1px 1px 0px rgba(0, 0, 0, 0.15);
`;

export const Transform = styled(motion.div)`
    text-align: right;
    font-weight: 700; 
    font-size: 32.36px; 
    line-height: 1.12;
    text-shadow: -1px 1px 0px rgba(0, 0, 0, 0.15);
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