import styled from '@emotion/styled';

export const Section = styled.div``;

export const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    margin-bottom: ${({ theme }) => theme.fontSizes[0]+'px'};
    font-weight: 400;
`;

export const Slider = styled.div`
    display: flex; 
    flex-wrap: wrap;
     
    & > *{
        margin-bottom: 16px !important;
    }
`; 