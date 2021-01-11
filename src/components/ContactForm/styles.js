import styled from '@emotion/styled';

export const Contact = styled.div`
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.24);

    h2{
        margin: 46px 0 53px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
    }
`;

export const Col = styled.div`
    width: 100%;
    padding: 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        width: 50%;
        padding: 0 10px;
    }

    & > div{
        margin: 0 0 24px;
    }
`; 

export const TextareaWrapper = styled.div`
    width: 100%;

    textarea{
        height: 212px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        padding: 0 10px;
    }
`;