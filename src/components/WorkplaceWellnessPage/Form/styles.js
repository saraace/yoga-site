import styled from '@emotion/styled';

export const Row = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        flex-direction: row;
    }
`;

export const Col = styled.div`
    width: 100%;
    padding: 0 10px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 50%;
    }

    & > div{
        margin: 0 0 24px;
    }
`; 

export const TextareaWrapper = styled.div`
    width: 100%;
    padding: 0 10px;

    textarea{
        height: 212px;
    }
`;