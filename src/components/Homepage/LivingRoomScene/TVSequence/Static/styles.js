import styled from '@emotion/styled';
import { Container } from "theme-ui";

export const Pose = styled.div`
    height: 100vh;
    background-image: url(/images/homepage/tv-seq/tv_seq_00103.jpg);
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: cover;
`;

export const TextContainer = styled(Container)`
    display: flex; 
    height: 100%;
    align-items: center; 
`;

export const Col = styled.div`
    color: ${({ theme }) => theme.colors.dark};
    width: 550px;
    top: 100%;

    h1{
        font-size: 32px; 
        line-height: 1.12; 
        font-weight: 700; 
        margin: 0 0 25px;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: 64px; 
            margin: 0 0 36px;
        }
    }

    p{
        font-size: 18px; 
        line-height: 1.315; 
        margin: 0 0 80px; 

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: 32px; 
            margin: 0 0 100px; 
        }
    }

    .button-row{
        display: flex; 
        flex-direction: column;

        button, a{
            margin: 0 0 20px;
            width: 200px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            flex-direction: row;

            button{
                margin: 0 25px 0 0;
                width: auto;
            }

            a{
                margin: 0; 
                width: auto;
            }
        }
    }
`; 

export const TV = styled.div`
    position: relative;
    height: 100vh;
    
    &:before{
        content: ""; 
        position: absolute; 
        top: 0; 
        bottom: 0; 
        left: 0; 
        right: 0; 
        background-image: url(/images/homepage/tv-seq/tv_seq_00239.jpg);
        background-repeat: no-repeat; 
        background-position: center; 
        background-size: cover;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            left: -286px; 
            right: 286px; 
        }
    }
`;

export const SlideOverTextContainer = styled.div`
    padding: 57px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute; 
    bottom: 0; 
    right: 0; 
    z-index: 10;

    &::before{
        content: ""; 
        position: absolute; 
        top: 0; 
        bottom: 0;
        left: 0; 
        right: 0; 
        z-index: -1;
        background: rgba(10, 29, 58, 0.33);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            background: rgba(10, 29, 58, 0.33);
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 537px;
        padding: 0 60px 0 65px;
        top: 0; 
        bottom: 0;
        right: 0; 
    }
`; 

export const SlideOverText = styled.div`

    h2{
        font-size: 32px; 
        line-height: 1.12;
        font-weight: 700;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: 48px; 
        }
    }

    h3{
        font-size: 24px; 
        line-height: 1.315; 
        font-weight: 400;
        padding: 0 0 99px 0;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: 32px; 
            padding: 0 0 200px 0;
        }
    }

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.5;
        font-weight: 400;
        position: relative; 
        margin-bottom: 0;

        &::after{
            content: ""; 
            position: absolute; 
            width: 50px; 
            height: 5px; 
            background: #FFD215; 
            top: -27px; 
            left: 0;
        }
    }
`; 
