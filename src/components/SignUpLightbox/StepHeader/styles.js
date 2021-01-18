import styled from '@emotion/styled';

export const Total = styled.div`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
    line-height: 1.33; 
    font-weight: 600; 
`;

export const Heading = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes[5]+'px'}; 
    line-height: 1.33; 
    font-weight: 600; 
    margin: 0 0 70px;
`;