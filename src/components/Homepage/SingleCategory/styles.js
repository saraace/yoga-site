import styled from "@emotion/styled";
import { Container } from "theme-ui";
import { motion } from "framer-motion";

export const FullScreen = styled.div`
    height: 100vh; 
    overflow: hidden;

    & > div{
        height: 100%;
        background-repeat: no-repeat; 
        background-size: cover; 
        background-position: center center;
        display: flex; 
        align-items: flex-end;
    }
`; 

export const VideoWrapper = styled.div`
    position: absolute;
    top: 0; 
    bottom: 0;
    left: 0; 
    right: 0; 
    overflow: hidden;

    video{
        position: absolute;
    }
`; 

export const ContentContainer = styled(Container)`
    display: flex; 
    height: 100%;
    justify-content: space-between;
    width: 100%;
`; 

export const Intro = styled(motion.div)`
    width: 40%;
    height: 100%;
    align-self: flex-end;
    position: relative;

    & > div{
        position: absolute;
        top: 100%;
    }

    svg{
        width: 60px; 
        margin-bottom: 24px;
        
        path, polygon{ 
            fill: ${({ theme }) => theme.colors.text}
        }
    }

    h2{
        font-weight: 700; 
        font-size: 64px; 
        line-height: 1.12;
        margin-bottom: 21px;
    }

    p{
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
        line-height: 1.315;
        position: relative;
        margin: 0 0 0 9px;
        padding: 30px 0 0 0;

        &::before{
            content: ""; 
            position: absolute; 
            width: 146px;
            height: 6px; 
            background: ${({ theme }) => theme.colors.yoga};
            left: 0; 
            top: 0px;
        }
    }
`; 

export const Benefits = styled(motion.div)`
    width: 40%;
    height: 100%;
    align-self: flex-end;
    position: relative;

    & > div{
        position: absolute;
        top: 100%;
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
    margin: 0 0 50px 0;

    &::before{ 
        content: ""; 
        position: absolute;
        width: 45px; 
        height: 5px; 
        background: ${({ theme }) => theme.colors.primary};
        left: -77px;
        top: 10px;
    }
`; 
