import styled from '@emotion/styled';
import { Container } from "theme-ui";

export const Scene = styled.div`
    position: relative;
    background: linear-gradient(107.13deg, #0E4942 -55.32%, #0E2649 58.62%), #FFFFFF;
    overflow: hidden;

    &::before{
        content: "";
        position: absolute;
        top: 0; 
        left: 0; 
        right: 0; 
        bottom: 0;
        background-image: url(/images/homepage/instructors/bg.png); 
        background-repeat: no-repeat;
        background-size: cover; 
        background-position: center;
        z-index: 2;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        height: 100vh;
    }
`;

export const SceneContainer = styled(Container)`
    height: 100%; 
    display: flex; 
    align-items: center;
    position: relative; 
    z-index: 3;
    padding: 150px 24px 100px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){ 
        padding: 124px 24px 0;
    }
`;

export const Col = styled.div`
    width: 480px;
    align-self: center;

    h3{
        font-size: 32px; 
        line-height: 1.12; 
        font-weight: 700;
        margin: 0 0 15px;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: 48px; 
            margin: 0 0 30px;
        }
    }

    h2{
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
        line-height: 1.545; 
        font-weight: 400;
        padding-bottom: 10px;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: 26px;
            margin: 0 0 30px;
        }
    }

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.545;
        font-weight: 400;
        margin-top: 40px;
    }
`;

export const Video = styled.div`   
    position: relative;
    height: 479px;
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

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        height: 200px;
        margin: 0 100px 0 -100px;
    }
`;

export const PlayButton = styled.div`
    width: 86px; 
    height: 86px; 
    border: 4px solid #FFEFA9;
    background: #FFD524;
    position: absolute; 
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    svg{
        fill: #fff;
        width: 26px;
        position: absolute; 
        top: 24px; 
        left: 30px; 
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        right: -43px;
        transform: translateY(-50%);
    }
`;

export const ImageCol = styled.div`
    position: relative;
    height: 100%;
    flex: 1;
    display: none; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: block;    
    }
`;

export const Instructor = styled.img`
    position: absolute;
    height: 100%;
    max-height: 900px; 
    bottom:0;
    left: 100px;
    z-index: 2;
`;