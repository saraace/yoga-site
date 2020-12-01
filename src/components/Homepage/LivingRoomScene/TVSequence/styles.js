import styled from '@emotion/styled';
import { Container } from "theme-ui";

export const TV = styled.div`
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0;
`; 

export const VideoWrapper = styled.div`
    position: absolute;
    top: 0; 
    bottom: 0;
    left: 0; 
    right: 0;

    video{
        position: absolute; 
    }

    &.front{
        z-index: 5;
    }
`; 

export const SeqWrapper = styled.div`
    position: absolute; 
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    background-image: url(/images/homepage/tv-seq/shift_websiteAnim_v06_00000.jpg);
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
    }
`;

export const Text = styled.div`
    display: flex; 
    align-items: center; 
    position: absolute; 
    top: 0;
    bottom: 0; 
    left: 0;
    right: 0;
    z-index: 10;
`;

export const TextContainer = styled(Container)`
    display: flex; 
    align-items: center;
`;

export const Col = styled.div`
    color: ${({ theme }) => theme.colors.dark};
    width: 550px;

    h1{
        font-size: 64px; 
        line-height: 1.12; 
        font-weight: 700; 
        margin: 0 0 36px;
    }

    p{
        font-size: 32px; 
        line-height: 1.315; 
        margin: 0 0 122px; 

    }
`; 

export const ButtonRow = styled.div`
    display: flex; 

    button{
        margin: 0 25px 0 0;
    }
`; 