import styled from '@emotion/styled';

export const FullScreen = styled.div`
    height: 100vh; 
    background-size: cover; 
    background-position: center; 
    display: flex;
    align-items: flex-end; 
    position: relative;
`; 

export const VideoWrapper = styled.div`
    position: absolute;
    top: 0; 
    bottom: 0;
    left: 50%; 
    transform: translateX(-50%);

    video{
        height: 100%;
    }
`; 