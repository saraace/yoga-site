import styled from '@emotion/styled';

export const FeaturedClass = styled.div`
    display: flex;
    margin: 80px 0;
`;

export const FeaturedClassCard = styled.div`
    margin-right: 40px;

    & > *{
        margin: 0;
    }
`;

export const FeaturedClassContent = styled.div`
    h2{
        font-weight: 400;
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        margin: 0;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    margin: 0 0 44px 0;

    & > div:first-child{
        margin: 0 16px 0 0;
    }
`; 