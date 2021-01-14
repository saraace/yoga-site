import styled from '@emotion/styled';
import { Button } from "theme-ui";

export const Lightbox = styled.div`
    position: fixed;
    display: flex; 
    align-items: center;
    text-align: center;
    padding: 68px 0 0;
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    overflow: hidden;
    z-index: 11;

    &:after{
        content: ""; 
        position: absolute; 
        top: 0; 
        left: 0; 
        bottom: 0; 
        right: 0; 
        background: linear-gradient(0deg, rgba(29, 46, 72, 0.5), rgba(29, 46, 72, 0.5)), rgba(0, 0, 0, 0.8);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        z-index: -1;
    }

    & > div{
        width: 100%;
    
        h2{
            font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
            line-height: 1.33;
        }

        p{
            font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
            line-height: 1.4;
            margin: 0 auto 70px;
            width: 300px;
        }
    }
`;

export const Back = styled(Button)`
    margin-top: 20px;
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    line-height: 1; 
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;

    &:hover{
        text-decoration: underline;
    }
`;