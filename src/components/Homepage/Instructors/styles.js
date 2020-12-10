import styled from '@emotion/styled';
import { Container } from "theme-ui";
import { motion } from "framer-motion";

export const Scene = styled.div`
    height: 100vh;
    position: relative;
    background: linear-gradient(107.13deg, #0E4942 -55.32%, #0E2649 58.62%), #FFFFFF;
    overflow: hidden;
`;

export const Bg = styled(motion.img)`
    position: absolute; 
    top: 0;
    opacity: 0.7;
`;

export const SceneContainer = styled(Container)`
    height: 100%; 
    display: flex; 
    align-items: center;
    position: relative; 
    z-index: 1;
`;

export const Col = styled.div`
    width: 480px;

    h3{
        font-size: 48px; 
        line-height: 1.12; 
        font-weight: 700;
        margin: 0 0 30px;
    }

    h2{
        font-size: 26px; 
        line-height: 1.545; 
        font-weight: 400;
        padding-bottom: 50px;
    }

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.545;
        font-weight: 400;
        margin-top: 400px;
    }
`;

export const Video = styled.div`   
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    z-index: 3;

    img{
        width: auto;
        max-width: 100%;
        max-height: 300px;
    }
`;

export const PlayButton = styled(motion.div)`
    width: 96px; 
    height: 96px; 
    border: 4px solid #FFEFA9;
    background: #FFD524;
    position: absolute; 
    right: 35px;
    border-radius: 50%;
    top: 50%;

    svg{
        fill: #fff;
        width: 26px;
        position: absolute; 
        top: 27px; 
        left: 35px; 
    }
`;

export const Instructor = styled.img`
    position: absolute;
    height: 100%;
    max-height: 900px; 
    bottom:0;
    right: 0;
    z-index: 2;
`;