import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const FullScreen = styled(motion.div)`
    height: 100vh; 
    overflow: hidden;
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center;
    position: relative; 

    &.desktop{
        background-image: url(/images/homepage/shift-seq/desktop/shift_seq_00000.jpg);
    }

    &.mobile{
        background-image: url(/images/homepage/shift-seq/mobile/shift_seq_00000.jpg);
    }
`;