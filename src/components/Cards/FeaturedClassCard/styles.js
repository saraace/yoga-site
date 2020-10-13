import styled from '@emotion/styled';
import Card from "../index";

export const CardWrapper = styled(Card)`
    width: 327px; 
    height: 192px;
    padding: 16px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 512px; 
        height: 300px;
        padding: 21px 24px 24px;
    }
`;

export const CardHeader = styled.div`
    display: flex; 
    justify-content: space-between;
`; 

export const DesktopHeader = styled.div`
    display: none; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`; 

export const MobileHeader = styled.div`
    display: block; 
    text-transform: uppercase;
    font-weight: 700;

    span{
        margin: 0 5px 0 0;
        &:after{
            margin: 0 0 0 5px;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: none;
    }
`; 

export const ClassType = styled.div`
    position: relative;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    line-height: 1.4;

    &:after{
        content: "";
        position: absolute; 
        bottom: -3px;
        left: 0; 
        right: 0; 
        height: 4px; 
        border-radius: 8px; 
        background: ${({ theme }) => theme.colors.muted};
    }

    &.follow{
        &:after{
            background: ${({ theme }) => theme.colors.danger};
        }
    }
`;

export const CardFooter = styled.div``; 

export const DesktopFooter = styled.div`
    display: none; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: block;
    }
`; 

export const MobileFooter = styled.div`
    display: block; 

    h3{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
        font-weight: 400;
        line-height: 1.4;
    }

    span{
        font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
        line-height: 1;
        font-weight: 500;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: none;
    }
`; 

export const Details = styled.div`
    line-height: 1;

    span{
        opacity: 0.8;
        margin: 0 10px 0 0;
        &:after{
            content: "|";
            opacity: 0.5;
            margin: 0 0 0 10px;
        }
        &:last-child{
            &:after{
                display: none;
            }
        }
    }
`;
