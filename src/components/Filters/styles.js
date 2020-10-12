import styled from '@emotion/styled';

export const FilterButton = styled.div`
    display: flex; 
    align-items: center; 

    svg{
        width: 14px; 
        fill: ${({ theme }) => theme.colors.primary};
        margin: 0 13px 0 0;
    }
    span{
        text-transform: uppercase; 
        color: ${({ theme }) => theme.colors.primary};
        line-height: 1;
        font-weight: 700;
    }
`;