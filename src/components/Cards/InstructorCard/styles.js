import styled from '@emotion/styled';
import Card from "../index";

export const CardWrapper = styled(Card)`
    width: 182px; 
    height: 300px;
    padding: 16px; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 280px; 
        height: 460px;
        padding: 24px;
    }
    
    &.large{
        width: 50%;
    }
`;

export const Name = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
    font-weight: 600;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        font-weight: 700;
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}
    }
`; 

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    line-height: 1.1;
    font-weight: 500;
    margin: 0 0 10px;
    position: relative; 

    &:after{
        content: ""; 
        position: absolute; 
        bottom: -14px; 
        left: 0;
        height: 4px;
        width: 40px; 
        border-radius: 27px; 
        background-color: ${({ theme }) => theme.colors.purple};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
        line-height: 1.4;
    }
`; 

export const Classes = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    line-height: 1; 
    padding: 12px 0 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
        line-height: 1.4;
        padding: 14px 0 0;
    }
`; 