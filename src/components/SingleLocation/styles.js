import styled from '@emotion/styled';
import { Container } from "theme-ui";

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
