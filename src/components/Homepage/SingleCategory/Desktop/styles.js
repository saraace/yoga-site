import styled from "@emotion/styled";
import { Container } from "theme-ui";
import { motion } from "framer-motion";

export const FullScreen = styled.div`
    height: 100vh; 
    overflow: hidden;
    position: relative;

    & > div{
        height: 100%;
        background-repeat: no-repeat; 
        background-size: cover; 
        background-position: center center;
        display: flex; 
        align-items: flex-end;
    }

    &.gradient{
        &:before{
            content: ""; 
            position: absolute; 
            bottom: 0; 
            left: 0; 
            right: 0;
            z-index: 10;
            height: 20%;
            background: linear-gradient(180deg, rgba(99, 126, 141, 0) 0%, #184058 100%);
            opacity: 0.5;
        }
    
        &:after{
            content: ""; 
            position: absolute; 
            top: 0; 
            left: 0; 
            right: 0;
            z-index: 10;
            height: 20%;
            background: linear-gradient(180deg, #184058 0%, rgba(99, 126, 141, 0) 100%);
            opacity: 0.5;
        }
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
    //border: 3px solid green;
    height: 100%;
    position: relative; 
    z-index: 10;
`;

export const ContentContainer = styled(motion.div)`
    display: flex; 
    position: absolute; 
    top: 0; 
    bottom: 0; 
    right: 24px; 
    left: 24px;
    //border: 2px dashed blue;
`; 

export const Intro = styled(motion.div)`
    width: 40%;
    height: 100%;
    //border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 0 100px;

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

export const BenefitsContainer = styled(ContentContainer)`
    justify-content: flex-end;
`;

export const Benefits = styled(motion.div)`
    width: 40%;
    height: 100%;
    position: relative;
    //border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 0 100px;
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
        left: -77px;
        top: 10px;
    }
`; 
