import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const Section = styled.div`
    padding: 0 24px;
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

export const MasonryGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 16px;

    @media (min-width: 1161px){
        margin-top: 98px;
        flex-flow: row wrap;
        justify-content: space-between;
    
        &.push-up{
            margin-top: 127px;
        }
        
        .card:nth-of-type(3n),
        .card:nth-of-type(3n+1){
            margin-top: -86px;
            margin-bottom: 118px;
        }
    }
`; 