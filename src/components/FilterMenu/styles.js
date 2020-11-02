import styled from '@emotion/styled';
import { Container } from 'theme-ui';
import { motion } from 'framer-motion';

export const Menu = styled(motion.div)`
    background-color: #111b29;
    z-index: 1;
    overflow: hidden;
    padding: 81px 0;
    border-radius: 40px;
`; 

export const Contain = styled(Container)`
    padding: 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 0 24px;
    }

`;

export const Row = styled.div`
    display: flex; 
    max-width: 776px;
    margin: 0 auto;

    & > div{
        width: 100%;
    }
`;

export const FilterRow = styled(Row)`
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        height: 320px;
    }

    & > div{
        width: 380px;
    }
`; 

export const Filter = styled.div`
    display: flex;
    margin: 0 0 44px 0;
    padding: 0 24px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 0;
    }
`; 

export const ClassTypeFilter = styled(Filter)`
    label{
        width: 157px;
    }
`; 

export const DifficultyFilter = styled(Filter)`
    label{
        width: 99px
    }
`;

export const YogaType = styled(Filter)`
    flex-flow: column wrap;
`;

export const FilterTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
    line-height: 1.4; 
    font-weight: 700;
    margin-bottom: 15px;
    padding: 0 24px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 0;
    }
`; 

export const ApplyButton = styled.div`
    text-align: center;
    width: 100%;
    
    button{
        padding: 17px 73px;
    }
`; 
