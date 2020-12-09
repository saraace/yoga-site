import styled from '@emotion/styled';
import { Container } from "theme-ui";

export const FullScreen = styled.div`
    height: 100vh; 
    background-size: cover; 
    background-position: center; 
    display: flex;
    align-items: flex-end; 
    position: relative;
    overflow: hidden;

    & > div{
        z-index: 1;
        
        &.front{
            z-index: 5;
        }
    }
`; 