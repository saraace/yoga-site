import styled from '@emotion/styled';

export const Location = styled.div`
    padding: 0 0 56px 0;
`;

export const Title = styled.h1`
    font-size: 50px; 
    line-height: 1.114em;
    text-align: center; 
    margin: 0 20px;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        font-size: ${({ theme }) => theme.fontSizes[7]+'px'};   
    }
`;

export const Address = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};   
    line-height: 1.6em; 
    text-align: center;
    margin: 10px 0 32px;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        font-size: 18px;
        line-height: 1.15em; 
        margin: 20px 0 64px;
    }
`;

export const ButtonRow = styled.div`
    display: flex; 
    justify-content: center;
`; 

export const Schedule = styled.div`
    display: flex;
    border-top: 1px solid rgba(196, 196, 196, 0.24);
    padding: 48px 0;
`;

export const UpcomingClasses = styled.div`
    width: 424px;
    margin-right: 51px;
`;

export const Preview = styled.div`
    flex-grow: 1;
`;
