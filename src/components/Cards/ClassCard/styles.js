import styled from '@emotion/styled';
import Card from "../index";

export const CardWrapper = styled(Card)`
    &.default{
        width: 266px; 
        height: 192px;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            width: 368px; 
            height: 264px;
        }
    }

    &.tall{
        width: 368px; 
        height: 436px;
        margin: 0;
    }

    &.large{
        width: 512px; 
        height: 300px;
        margin: 0 16px 0 0;
    }

    &.featured{
        width: 100%;
        height: 220px;
        margin: 0;
        border-radius: 0px;

        img,
        &:after{
            border-radius: 0px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            width: 674px;
            height: 395px;
            margin: 0;
            border-radius: 12px;

            img,
            &:after{
                border-radius: 12px;
            }
        }
        
    }
`;

export const CardHeader = styled.div`
    display: flex; 
    justify-content: space-between;
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
