import styled from '@emotion/styled';
import { Container } from "theme-ui";

export const FullScreen = styled.div`
    height: 100vh;
    background-image: url(/images/homepage/phone-seq/phone_seq_00238.jpg);
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: cover;
`;

export const TextContainer = styled(Container)`
    height: 100%; 
    display: flex;
    align-items: center;
    padding: 124px 24px 100px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 0 24px;
    }
`;

export const Text = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    h2{
        font-size: 32px; 
        line-height: 1.12;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: ${({ theme }) => theme.fontSizes[4]+'px'}; 
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        height: auto;
    }
`;

export const LeftText = styled.div`
    max-width: 430px;

    p{
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
        line-height: 1.315;
        font-weight: 400;
        margin: 0 0 10px 0;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: 32px; 
            margin: 0 0 20px 0;
        }
    }
`; 

export const RightText = styled.div`
    max-width: 310px;
    align-self: flex-end;
    text-align: right;

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.5; 
        font-weight: 400; 
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        text-align: left;
    }
`; 

