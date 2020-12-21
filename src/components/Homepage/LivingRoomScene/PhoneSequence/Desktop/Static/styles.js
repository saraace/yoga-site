import styled from '@emotion/styled';
import { Container } from "theme-ui";

export const FullScreen = styled.div`
    height: 100vh;
    background-image: url(/images/homepage/phone-seq/phone_seq_00238.jpg);
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: cover;
`;

export const TextContainer = styled(Container)`
    height: 100%; 
    display: flex;
    align-items: center;
`;

export const Text = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
`;

export const LeftText = styled.div`
    width: 430px;

    p{
        font-size: 32px; 
        line-height: 1.315; 
        font-weight: 400;
        margin: 0 0 20px 0;
    }
`; 

export const RightText = styled.div`
    width: 310px;
    align-self: flex-end;

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.5; 
        font-weight: 400; 
    }
`; 

