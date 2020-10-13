import styled from '@emotion/styled';

export const Section = styled.div`
    padding: 0 0 0 24px;
    margin: 40px 0 0 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        margin: 0 0 40px 0;
    }
`;

export const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    margin-bottom: 12px;
    font-weight: 400;
`;

export const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 16px;

    & > *{
        margin-bottom: 32px !important;
    }

    @media (min-width: 1161px){
        flex-flow: row wrap;
        justify-content: space-between;
    }
`; 