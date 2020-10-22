import styled from '@emotion/styled';

export const TopRowWrapper = styled.div`
    margin: 0 0 41px;
`; 

export const TopRow = styled.div`
    display: flex; 
    justify-content: space-between;
    flex-direction: column; 

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
    }
`;