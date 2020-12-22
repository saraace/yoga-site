import styled from '@emotion/styled';
import { Container } from "theme-ui";
import { motion } from "framer-motion";

export const FullScreen = styled.div`
    display: flex; 
    align-items:center;
    padding: 150px 0;
    overflow: hidden;
`;

export const SceneContainer = styled(Container)`
    position: relative; 
    z-index: 2;
`;

export const Row = styled.div`
    
    position: relative;
    z-index: 1;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: flex;
        align-items: center;
    }
`; 

export const Col = styled.div``; 

export const Phone = styled.div`
    position: relative;

    img{
        width: 100%;
        margin: 0 auto;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            width: 500px;
            margin: 0 0 0 -70px;
        }
    }
`; 

export const VideoWrapper = styled.div`
    position: absolute;
    top: 50px; 
    bottom: 65px; 
    left: 70px; 
    right: 76px;
    z-index: -1;
    overflow: hidden;
    background-image: url(/images/homepage/sign-up/phone-still.png);
    background-size: cover; 
    background-position: center;

    video{
        height: 100%;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        top: 78px; 
        bottom: 100px; 
        left: 46px; 
        right: 126px;
    }
`; 

export const Form = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.purple};
    border-radius: 16px;
    padding: 24px;
    position: relative;

    h2{
        font-size: 24px; 
        line-height: 1.1;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: 49.12px; 
            line-height: 1.13;
        }
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
        line-height: 1.4;
        margin-bottom: 40px;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
            line-height: 1.315;
        }
    }

    &::before{
        content: ""; 
        position: absolute; 
        z-index: -1;
        top: 0; left: 0;
        right: 0; bottom: 0; 
        background: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 40px;  
    }
`; 

export const ButtonWrapper = styled.div`
    text-align: center;
    
    button{
        width: 100%;
        max-width: 360px;
        padding: 20px 0;
    }
`; 

export const Small = styled.div`
    text-align: center; 
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    line-height: 1.315;
    margin-top: 16px;
`;

export const Bg = styled(motion.img)`
    position: absolute; 
    display: none;
`;