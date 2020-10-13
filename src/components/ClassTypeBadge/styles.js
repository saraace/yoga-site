import styled from '@emotion/styled';

export const Badge = styled.div`
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    line-height: 1.33;

    &:after{
        content: "";
        position: absolute; 
        bottom: -5px;
        left: 0; 
        right: 0; 
        height: 4px; 
        border-radius: 8px; 
        background: ${({ theme }) => theme.colors.muted};

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            bottom: -3px;   
        }
    }

    &.follow{
        &:after{
            background: ${({ theme }) => theme.colors.danger};
        }
    }

    &.fiit{
        &:after{
            background: ${({ theme }) => theme.colors.purple};
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
        line-height: 1.4;        
    }
`;