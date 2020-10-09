import styled from '@emotion/styled';

export const Card = styled.a`
    border-radius: 12px;
    margin: 0 16px 0 0;
    padding: 21px 24px 24px;
    position: relative;

    &:after{
        content: "";
        position: absolute; 
        top: 0; 
        bottom: 0; 
        left: 0; 
        right: 0;
        border-radius: 12px;
        background: linear-gradient(0deg, rgba(12, 12, 54, 0.5) 47.42%, rgba(0, 0, 0, 0.2) 97.37%);
        z-index: -1;
    }

    &.md{
        width: 512px;
        height: 300px;
    }
    &.sm{
        width: 368px; 
        height: 266px;
    }
`;    

export const Image = styled.img`
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0; 
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
`;

export const CardContent = styled.div`
    height: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
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
