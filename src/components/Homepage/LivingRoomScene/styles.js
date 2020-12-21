import styled from '@emotion/styled';
import { Container } from "theme-ui";

export const FullScreen = styled.div`
    background-size: cover; 
    background-position: center; 
    position: relative;
    overflow: hidden;

    &.animated{ 
        height: 100vh; 
    }

    & > div{
        z-index: 1;
        
        &.front{
            z-index: 5;
        }
    }
`; 