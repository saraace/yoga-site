import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const LabelContainer = styled(motion.div)`
    text-align: right; 
`; 

export const Label = styled.div`
    display: inline-block;
    padding: 1px 10px;
    margin: 3px 0 0;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.danger};
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
`;