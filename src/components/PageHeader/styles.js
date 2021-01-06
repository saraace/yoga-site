import styled from '@emotion/styled';

export const Intro = styled.div`
    text-align: center;
    width: 712px;
    margin: 0 auto;

    h1{
        font-size: ${({ theme }) => theme.fontSizes[7]+'px'};
        line-height: 1.115;
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.4;
        margin: 0 0 54px;
    }
`; 