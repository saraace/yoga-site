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
`;

export const SceneContainer = styled(Container)`
    height: 100%; 
    display: flex; 
    align-items: center;
    position: relative; 
    z-index: 1;
    padding: 124px 24px 0;
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
        padding-bottom: 10px;
    }

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.545;
        font-weight: 400;
        margin-top: 20px;
    }
`;

export const Video = styled.div`   
    position: relative;
    height: 200px;
    margin: 0 100px 0 -100px;
    z-index: 3;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
    }
`;

export const PlayButton = styled(motion.div)`
    width: 86px; 
    height: 86px; 
    border: 4px solid #FFEFA9;
    background: #FFD524;
    position: absolute; 
    right: -43px;
    border-radius: 50%;
    top: 50%;

    svg{
        fill: #fff;
        width: 26px;
        position: absolute; 
        top: 24px; 
        left: 30px; 
    }
`;

export const ImageCol = styled.div`
    position: relative;
    height: 100%;
    flex: 1;
`;

export const Instructor = styled.img`
    position: absolute;
    height: 100%;
    max-height: 900px; 
    bottom:0;
    left: 100px;
    z-index: 2;
`;