import styled from '@emotion/styled';
import { motion } from "framer-motion"; 

export const Laptop = styled(motion.div)`
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
    background-image: url(/images/homepage/laptop-seq/mobile/laptop_seq_00000.jpg);
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: cover;
    z-index: 5;
`; 

export const Text = styled(motion.div)`
    position: absolute;
    text-align: center;
    width: 100%; 
    top: 50%;
    z-index: 10;

    h1{
        font-size: 32px; 
        line-height: 1.33;
        font-weight: 700; 
        text-align: center; 

        div{
            overflow: hidden; 

            span{
                display: inline-block;
            }
        }
    }
`; 