import styled from '@emotion/styled';
import { Container } from "theme-ui";
import { motion } from "framer-motion";

export const TV = styled(motion.div)`
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0;
`; 

export const Background = styled(motion.div)`
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0;
`; 

export const SeqWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0; 
    left: 0; 
    right: 0;
    background-image: url(/images/homepage/tv-seq/tv_seq_00000.jpg);
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: cover;

    &.front{
        z-index: 5;
    }
`; 

export const VideoLoopWrapper = styled.div`
    position: absolute; 

    img{
        position: absolute; 
        z-index: 1;
    }

    video{
        position: absolute; 
    }

    &.front{
        opacity: 1;
        z-index: 10;
    }
`;

export const Text = styled(motion.div)`
    display: flex; 
    align-items: center; 
    position: absolute; 
    top: 0;
    bottom: 0; 
    left: 0;
    right: 0;
    z-index: 10;

    h1{
        span{
            display: inline-block;
        }
    }
`;

export const TextContainer = styled(Container)`
    display: flex; 
    align-items: center;
`;

export const Col = styled(motion.div)`
    color: ${({ theme }) => theme.colors.dark};
    width: 550px;

    h1{
        font-size: 64px; 
        line-height: 1.12; 
        font-weight: 700; 
        margin: 0 0 36px;
    }

    p{
        font-size: 32px; 
        line-height: 1.315; 
        margin: 0 0 100px; 

    }
`; 

export const ButtonRow = styled.div`
    display: flex; 

    button{
        margin: 0 25px 0 0;
    }
`; 

export const SlideOverTextContainer = styled(motion.div)`
    background: #0d2344;
    width: 537px;
    padding: 0 60px 0 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute; 
    right: 0; 
    top: 0; 
    bottom: 0;
    z-index: 10;

    h2{
        font-size: 48px; 
        line-height: 1.12;
        font-weight: 700;
    }

    h3{
        font-size: 32px; 
        line-height: 1.315; 
        font-weight: 400;
        padding: 0 0 200px 0;
    }

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.5;
        font-weight: 400;
        position: relative; 

        &::after{
            content: ""; 
            position: absolute; 
            width: 50px; 
            height: 5px; 
            background: #FFD215; 
            top: -27px; 
            left: 0;
        }
    }
`; 