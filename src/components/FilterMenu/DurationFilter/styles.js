import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Filter = styled.div`
    width: 329px;
    margin: 0 0 44px 24px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        margin: 0 0 44px 0px;
    }
`; 

export const DragContainer = styled.div`
    position: relative;
    height: 24px;

    &::after{
        content: ""; 
        position: absolute; 
        height: 3px; 
        width: 305px; 
        background: ${({ theme }) => theme.colors.indigo};
        top: 10px;
        left: 12px;
    }
`;

export const DragHandle = styled(motion.div)`
    width: 24px; 
    height: 24px; 
    background: ${({ theme }) => theme.colors.indigo};
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    z-index: 1;
`;

export const Labels = styled.div`
    display: flex; 
    justify-content: space-between;
    margin-top: 14px;
    position: relative;
`; 

export const Label = styled.div`
    width: 30px;
    text-align: center;

    &.first{
        text-align: left;
    }

    &.last{
        text-align: right;
    }

    &.mid1{
        position: absolute;
        left: 25%;
        transform: translateX(-50%);
    }

    &.mid2{
        position: absolute;
        left: 75%;
        transform: translateX(-50%);
    }

`; 