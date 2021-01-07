import styled from "@emotion/styled";
import { Container } from "theme-ui";

export const FullScreen = styled.div`
    height: 100vh; 
    overflow: hidden;
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center center;
    display: flex; 
    align-items: flex-end;
`; 

export const Contain = styled(Container)`
    height: 100%;
    position: relative; 
    z-index: 10;
    padding: 124px 24px 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 0 24px;
    }
`;

export const ContentContainer = styled.div`
    display: flex; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        position: absolute; 
        top: 0; 
        bottom: 0; 
        right: 24px; 
        left: 24px;
    }
`; 

export const Intro = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 0 100px;

    p{
        font-size: 18px; 
        line-height: 1.315;
        position: relative;
        padding: 30px 0 0 0;

        &::before{
            content: ""; 
            position: absolute; 
            width: 102px;
            height: 6px; 
            background: ${({ theme }) => theme.colors.yoga};
            left: 0; 
            top: 0;

            @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
                width: 146px;
            }
        }

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 40%;
    }
`; 

export const Heading = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    h2{
        flex: 1;
        font-weight: 700; 
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
        line-height: 1.12;
        margin-bottom: 0px;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: 64px;
            margin-bottom: 21px;
        }
    }

    svg{
        width: 50px; 
        
        path, polygon{ 
            fill: ${({ theme }) => theme.colors.text}
        }
        
        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            width: 60px; 
            margin-bottom: 24px;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: block;
    }
`;

export const BenefitsContainer = styled(ContentContainer)`
    justify-content: flex-end;
`;

export const Benefits = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 40%;
        padding: 0 0 100px;
    }
`; 

export const List = styled.ul`
    list-style: none; 
    margin: 0; 
    padding: 0;
`; 

export const ListItem = styled.li`
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'}; 
    line-height: 1.315;
    position: relative; 
    margin: 50px 0 0 0;

    &::before{ 
        content: ""; 
        position: absolute;
        width: 45px; 
        height: 5px; 
        background: ${({ theme }) => theme.colors.primary};
        top: -23px; 
        left: 0;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            left: -77px;
            top: 10px;
        }
    }
`; 
