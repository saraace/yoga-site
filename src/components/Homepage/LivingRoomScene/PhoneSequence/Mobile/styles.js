import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const Phone = styled.div`
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0;
`; 

export const SeqWrapper = styled.div`
    position: absolute; 
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    background-image: url(/images/homepage/phone-seq/mobile/phone_seq_00000.jpg);
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: cover;

    &.front{
        z-index: 5;
    }
`; 

export const TextContainer = styled(motion.div)`
    position: absolute; 
    width: 100%;
    top: 0; 
    bottom: 0;
    z-index: 10;

    & > div{ 
        height: 100%;
    }
`;

export const Text = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    position: relative;

    h2{
        font-size: 32px; 
        line-height: 1.12;
        font-weight: 700; 
    }
`;

export const LeftText = styled(motion.div)`
    max-width: 430px;
    position: absolute;
    top: 100%;

    p{
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
        line-height: 1.315;
        font-weight: 400;
        margin: 0 0 10px 0;
    }
`; 

export const RightText = styled(motion.div)`
    max-width: 310px;
    align-self: flex-end;
    position: absolute; 
    top: 100%;

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.5; 
        font-weight: 400; 
    }
`; 