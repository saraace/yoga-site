import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ContentWrapper = styled.div`
    height: 100%;
    position: relative;
`; 

export const BackgroundGradient = styled(motion.div)`
    height: 457px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(170.46% 170.46% at 47.92% -70.46%, #456696 0%, #0B1525 100%);
`;

export const BackgroundImage = styled(motion.div)`
    width: 100%; 
    height: 100%;    
    position: absolute;

    img{
        width: 100%; 
    }

    &.dashboard{
        height: 290px;

        img{
            height: 100%;
            object-fit: cover;
        }
    }
`; 

export const Page = styled.div`
    width: 100%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 104px 0 0; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 200px 0 0;         
    } 
    
    &.homepage{ 
        padding: 0 !important;
    }
`; 