import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const FilterButton = styled.div`
    display: flex; 
    align-items: center; 
    cursor: pointer;
    transition: 0.3s all ease;

    svg{
        width: 14px; 
        margin: 0 13px 0 0;

        path{
            fill: ${({ theme }) => theme.colors.primary};
        }
    }
    & > div{
        display: flex;
        text-transform: uppercase; 
        color: ${({ theme }) => theme.colors.primary};
        line-height: 1;
        font-weight: 700;

        & > div{
            margin: 0 0 0 10px;
        }
    }

    &:hover{
        opacity: 0.5;
    }
`;

export const FilterMenu = styled(motion.div)`
    position: fixed;
    top: 220px; 
    bottom: 0; 
    left: 0; 
    right: 0;
    background-color: #111b29;
    z-index: 1;
    overflow: hidden;
    padding: 81px 0 0;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`; 

export const FilterRow = styled.div`
    display: flex;
    width: 776px;
    margin: 0 auto;
    justify-content: space-between;
`; 

export const Filter = styled.div`
    display: flex;
    margin: 0 0 44px 0;
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
`; 

export const ApplyButton = styled.div`
    text-align: center;
    width: 100%;
    
    button{
        padding: 17px 73px;
    }
`; 
