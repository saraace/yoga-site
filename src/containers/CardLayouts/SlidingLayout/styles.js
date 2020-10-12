import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Section = styled.div`
    padding: 0 0 0 24px;
    margin: 40px 0 0 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        margin: 0 0 40px 0;
    }
`;

export const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    margin-bottom: 12px;
    font-weight: 400;
`;

export const Slider = styled.div`
    position: relative; 
`; 

export const SliderContents = styled(motion.div)`
    position: absolute;
    display: flex; 

    & > *:last-child{
        margin-right: 24px;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            margin-right: 136px;
        }
    }
`; 