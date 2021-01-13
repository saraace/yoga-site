import styled from '@emotion/styled';
import { Container } from "theme-ui";
import MapPin from "../../assets/svgs/location-pin.svg";

export const Location = styled.div`
    padding: 0 0 56px 0;
`;

export const Pin = styled(MapPin)`
    height: 24px;
    margin: 0 auto;
    display: block;

    path{
        fill: ${({ theme }) => theme.colors.text};  
    }
`; 

export const Address = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};   
    line-height: 1.6em; 
    text-align: center;
    margin: 10px 0 32px;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'};   
        line-height: 1.15em; 
        margin: 20px 0 64px;
    }
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

export const Tagline = styled.p`
    display: block; 
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
    line-height: 1.33;
    font-weight: 600;
    margin: 20px 0 45px;
`;

export const ButtonRow = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;

    button, a{
        margin: 0 11px 12px;
        display: block;
        width: 100%;

        @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
            margin: 0 11px;
            width: auto;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
    }
`;

export const Body = styled(Container)`
    border-top: 1px solid rgba(255, 255, 255, 0.24);
    padding: 60px 24px 0;
`;
