import styled from '@emotion/styled';
import { Button } from "theme-ui";
import { motion } from "framer-motion";

export const Lightbox = styled(motion.div)`
    display: flex; 
    align-items: center;
    padding: 68px 0 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    overflow: hidden;

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
`;

export const LightboxControls = styled.div`
    position: absolute;
    display: flex; 
    top: 120px;
    right: 50px;
`;

export const CloseButton = styled.span`
    cursor: pointer; 
    margin: 0 20px 0;
`; 

export const ResetButton = styled.span`
    cursor: pointer; 
    opacity: 0.8;

    &:hover{
        opacity: 1;
    }
`; 

export const ClassInfo = styled.div`
    text-align: center;
`;

export const ClassDetails = styled.div`
    line-height: 1.134;
    font-size: 13.14px;
    font-weight: 500;
    margin: 16px 0 50px;

    span{
        opacity: 0.8;
        margin: 0 7px 0 0;
        &:after{
            content: "|";
            opacity: 0.5;
            margin: 0 0 0 7px;
        }
        &:last-child{
            &:after{
                display: none;
            }
        }
    }
`;

export const Location = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
    line-height: 1.315;
    margin: 24px 0 0;

    svg{
        width: 16px;
        margin: 0 10px 0 0;
    }
`;

export const Title = styled.div`
    text-align: center; 
    font-size: 18px; 
    line-height: 1.315;
    margin: 0 0 12px;
`;

export const ClassroomLayout = styled.form`
    .wrapper{
        padding: 34px 10px 10px;
    }
    .label-wrapper{
        text-align: center;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 24px;
`;

export const SubmitButton = styled(Button)`
    display: block; 
    width: auto;
    padding: 15px 90px;
    margin: 30px auto;
`; 

export const CancelButton = styled(Button)`
    display: block;
    width: auto; 
    padding: 15px 90px; 
    margin: 30px auto;
`;