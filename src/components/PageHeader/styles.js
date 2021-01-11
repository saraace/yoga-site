import styled from '@emotion/styled';

export const Intro = styled.div`
    text-align: center;
    max-width: 712px;
    margin: 0 auto;
    padding: 20px;

    h1{
        font-size: ${({ theme }) => theme.fontSizes[5]+'px'};
        line-height: 1.115;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: ${({ theme }) => theme.fontSizes[7]+'px'};
        }
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.4;
        margin: 0 0 54px;
    }
`; 