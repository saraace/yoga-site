import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ChevronLeft from '../../../assets/svgs/chevron-left.svg';
import ChevronRight from '../../../assets/svgs/chevron-right.svg';

export const Filter = styled.div`
    width: 100%;
    margin: 0 0 58px;
    position: relative;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 776px; 
    }
`;

export const LeftControl = styled(ChevronLeft)`
    width: 27px; 
    height: 54px;
    position: absolute;
    left: -75px;
    top: 50px;
    z-index: 1;
    cursor: pointer;
    opacity: 0.5;
    transiton: 0.3s all ease;
    display: none;

    polygon{
        fill: #fff;
    }

    &:hover{
        opacity: 1;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: block;
    }
`; 

export const RightControl = styled(ChevronRight)`
    width: 27px; 
    height: 54px;
    position: absolute;
    right: -75px;
    top: 50px;
    z-index: 1;
    cursor: pointer;
    opacity: 0.5;
    transiton: 0.3s all ease;
    display: none;

    polygon{
        fill: #fff;
    }

    &:hover{
        opacity: 1;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: block;
    }
`;

export const SliderWrap = styled.div`
    position: relative; 
    height: 155px;
    overflow: hidden;
`; 

export const Slider = styled(motion.div)`
    display: flex;
    margin: 0 0 0 -26px; 
    position: absolute;
`; 

export const Instructor = styled.label`
    margin: 0 4px;
    width: 155px;
    height: 155px;
    opacity: 0.3;
    cursor: pointer;
    transition: 0.3s all ease;
    position: relative;

    &.selected{
        opacity: 1;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        margin: 0 26px;

        &:hover{
            opacity: 1;
        }
    }
`; 

export const Image = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
`; 

export const Overlay = styled.div`
    position: absolute; 
    z-index: 1;
    top: 0;
    right: 0; 
    bottom: 0; 
    left: 0;
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    padding: 12px;
    font-weight: 800;
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'}; 
    line-height: 1;

    input{
        display: none;
    }
`; 

export const SelectedIndicator = styled.div`
    width: 36px;
    height: 36px;
    background: #fff; 
    border-radius: 50%; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    opacity: 0;
    transition: 0.3s all ease;

    svg{
        width: 14px;
    }

    &.selected{
        opacity: 1;
    }
`;
