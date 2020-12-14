import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const FullScreen = styled(motion.div)`
    height: 100vh; 
    overflow: hidden;
    background-image: url(/images/homepage/shift-seq/shift_seq_00000.jpg);
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center;
    position: relative
`;