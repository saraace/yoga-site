import styled from '@emotion/styled';

export const Laptop = styled.div`
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0;
`; 

export const SeqWrapper = styled.div`
    position: absolute; 
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    background-image: url(/images/homepage/laptop-seq/laptop-seq-00000.jpg);
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: cover;

    &.front{
        z-index: 5;
    }
`; 

export const VideoLoopWrapper = styled.div`
    position: absolute; 
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0; 
    opacity: 0;

    img{
        position: absolute; 
        top: 0; 
        z-index: 1;
    }

    video{
        position: absolute; 
    }

    &.front{
        z-index: 10;
        opacity: 1;
    }
`;