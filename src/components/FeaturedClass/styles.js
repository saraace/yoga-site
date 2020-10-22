import styled from '@emotion/styled';

export const ClassWrapper = styled.div`
    display: flex;
    margin: 80px 0;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        flex-direction: row;
        align-items: center;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[3]}){
        align-items: flex-start;
    }
`;

export const CardWrapper = styled.div`
    wdith: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        margin-right: 40px;
    }
`;

export const Content = styled.div`
    padding: 18px 24px 0;

    h2{
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
        line-height: 1.3rem;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
            line-height: 1.255em;
        }
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        margin: 0;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 0;
        flex: 1;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    margin: 0 0 15px 0;
    flex-direction: column; 

    & > div:first-of-type{
        margin: 0 0 8px 0;
    }

    button{
        width: 100%;
        justify-content: center;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        flex-direction: row; 
        margin: 0 0 44px 0;

        & > div:first-of-type{
            margin: 0 16px 0 0;
        }
    }
`; 