import styled from '@emotion/styled';
import { Container } from "theme-ui";

export const Laptop = styled.div`
    height: 100vh;
    background-image: url(/images/homepage/laptop-seq/laptop_seq_00239.jpg);
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: cover;
`;

export const TextContainer = styled(Container)`
    display: flex; 
    height: 100%; 
    justify-content: center; 
    align-items: center;

    h1{
        font-size: 32px; 
        line-height: 1.33;
        font-weight: 700; 
        text-align: center; 

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: 48px; 
            line-height: 1.5;
        }
    }
`;