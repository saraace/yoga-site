import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const BackgroundImage = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0; 
    right: 0; 
    z-index: -100;

    img{
        width: 100%; 
    }
`;