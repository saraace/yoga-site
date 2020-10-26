import styled from '@emotion/styled';
import Card from "../index";

export const CardWrapper = styled(Card)`
    &.default{
        width: 266px; 
        height: 192px;
        padding: 16px;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            width: 368px; 
            height: 264px;
            padding: 20px 24px 24px;
        }
    }

    &.tall{
        width: 100%;
        min-width: 326px; 
        height: 200px;
        margin: 0 0 16px;

        @media (min-width: ${({ theme }) => theme.breakpoints[0]}){
            width: 245px; 
            height: 180px;
            margin: 0 8px 16px;
        }

        @media (min-width: 650px){
            width: 270px; 
            height: 180px;
            margin: 0 8px 16px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
            width: 326px; 
            height: 200px;
            margin: 0 8px 16px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            width: 350px; 
            height: 400px;
            margin: 0 8px 16px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints[3]}){
            width: 368px; 
            height: 436px;
            margin: 0;
        }
    }

    &.programClass{
        width: 100%; 
        min-width: 368px; 
        height: 436px;
    }

    &.large{
        width: 327px; 
        height: 192px;
        padding: 16px;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            width: 512px; 
            height: 300px;
            padding: 21px 24px 24px;
            margin: 0 16px 0 0;
        }
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
            width: 500px;
            height: 310px;
            margin: 0;
            border-radius: 12px;

            img,
            &:after{
                border-radius: 12px;
            }
        }

        @media (min-width: ${({ theme }) => theme.breakpoints[3]}){
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

export const DateTime = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    line-height: 1;
    font-weight: 500;

    div{
        margin: 0 0 4px 0;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
        line-height: 1.135;
        font-weight: 600;
    }
`;

export const CardFooter = styled.div``; 

export const Title = styled.h3`
    margin-bottom: 4px; 
    font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
    line-height: 1.33;
    font-weight: 700;
    
    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        font-size: 32px;
        line-height: 0.98;
        font-weight: 600;
    }
`;

export const Details = styled.div`
    line-height: 1;
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    font-weight: 500;

    span{
        opacity: 0.8;
        margin: 0 7px 0 0;
        &:after{
            content: "|";
            opacity: 0.5;
            margin: 0 0 0 7px;
        }
        &:last-child{
            &:after{
                display: none;
            }
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        font-size: ${({ theme }) => theme.fontSizes[1]+'px'};  
        font-weight: 700;
        
        span{
            margin: 0 10px 0 0; 
            &:after{
                margin: 0 0 0 10px;
            }
        }
    }
`;
