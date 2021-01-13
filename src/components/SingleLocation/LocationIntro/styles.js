import styled from '@emotion/styled';

export const Intro = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
        padding: 60px 0;
    }

    & > div{
        margin: 0 0 56px;
    }

    h2{
        margin: 0 0 6px;
    }
`;

export const Tagline = styled.div`
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    margin: 0 0 32px 0;
`; 

export const Description = styled.div``; 

export const MapContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        margin: 0 0 0 20px;
        align-items: flex-start;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        margin: 0 0 0 100px;
    }
`;

export const PhoneNumber = styled.a`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
    line-height: 1.33;
    font-weight: 600;
    text-decoration: none; 
    margin: 16px 0 0 0;

    svg{
        margin: 0 12px 0 0;
    }

    &:hover{
        text-decoration: underline; 
    }
`;