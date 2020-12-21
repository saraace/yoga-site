import styled from '@emotion/styled';
import { Container } from "theme-ui";

export const Scene = styled.div`
    padding: 200px 0 0;

    & > div{
        position: relative;
    }
`;

export const SceneContainer = styled(Container)`
    height: 100%; 
    display: flex; 
    align-items:center; 
    position: relative; 
`;

export const Col = styled.div`
    width: 800px; 
    align-self: center; 

    h3{
        font-size: 32px; 
        line-height: 1.315;
        font-weight: 400;
    }

    h2{
        font-size: 64px;
        line-height: 1.12; 
        font-weight: 700;
    }

    a{
        display: inline-block;
        margin-bottom: 55px;
    }

    p{
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
        line-height: 1.545;
        font-weight: 400;
        padding: 40px 0 0;
        margin: 0;
        width: 562px;
    }
`;

export const Video = styled.div`
    position: relative; 
    height: 200px; 
    width: 600px;
    margin: 0 100px 0 -100px; 
    z-index: 3; 

    img{
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        border-radius: 12px;
        line-height: 1;
    }
`;

export const ImageCol = styled.div`
    position: absolute; 
    flex: 1;
    bottom: 0; 
    right: 0;
    line-height: 1;
`;

export const Model = styled.img`
    height: 100%; 
    max-height: 700px; 
    bottom: 0; 
    left: 100px; 
    z-index: 2;
`;