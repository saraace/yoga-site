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
    background-image: url(/images/homepage/tv-seq/mobile/tv_seq_00000.jpg);
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: cover;
    z-index: 5;
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
    align-items: end;
    height: 100%;
`;

export const Col = styled(motion.div)`
    color: ${({ theme }) => theme.colors.dark};
    max-width: 550px;
    position: absolute;
    top: 100%;
    left: 24px; 
    right: 24px;

    h1{
        font-size: 32px; 
        line-height: 1.12; 
        font-weight: 700; 
        margin: 0 0 25px;
    }

    p{
        font-size: 18px; 
        line-height: 1.315; 
        margin: 0 0 80px; 
    }

    .button-row{
        display: flex; 
        flex-direction: column;

        button, a{
            margin: 0 0 20px;
            width: 200px;
        }
    }
`; 

export const SlideOverTextContainer = styled(motion.div)`
    padding: 57px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute; 
    top: 100%; 
    right: 0; 
    z-index: 10;

    &::before{
        content: ""; 
        position: absolute; 
        top: 0;
        bottom: 0;
        left: 0; 
        right: 0;
        z-index: -1;
        background: rgba(10, 29, 58, 0.33);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
    }
`; 

export const SlideOverText = styled(motion.div)`
    h2{
        font-size: 32px; 
        line-height: 1.12;
        font-weight: 700;
    }

    h3{
        font-size: 24px; 
        line-height: 1.315; 
        font-weight: 400;
        padding: 0 0 99px 0;
    }

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.5;
        font-weight: 400;
        position: relative; 
        margin-bottom: 0;

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