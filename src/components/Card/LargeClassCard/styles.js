import styled from '@emotion/styled';

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
