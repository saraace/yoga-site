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

export const Contain = styled(Container)`
    position: relative; 
    z-index: 10;
`;

export const ContentContainer = styled(motion.div)`
    position: absolute; 
    top: 0; 
    bottom: 0; 
    right: 24px; 
    left: 24px;
`; 

export const Intro = styled(motion.div)`
    padding: 0 0 100px;

    p{
        font-size: 18px; 
        line-height: 1.315;
        position: relative;
        margin: 0 0 0 9px;
        padding: 30px 0 0 0;

        &::before{
            content: ""; 
            position: absolute; 
            width: 102px;
            height: 6px; 
            background: ${({ theme }) => theme.colors.yoga};
            left: 0; 
            top: 0;
        }
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
    }

    svg{
        width: 50px; 
        
        path, polygon{ 
            fill: ${({ theme }) => theme.colors.text}
        }
    }
`;


export const BenefitsContainer = styled(ContentContainer)`
    justify-content: flex-end;
`;

export const Benefits = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    }
`; 
