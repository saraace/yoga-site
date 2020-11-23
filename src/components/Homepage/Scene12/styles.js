import styled from '@emotion/styled';

export const FullScreen = styled.div`
    padding: 150px 0 0;
`;

export const Row = styled.div`
    display: flex;
`; 

export const Col = styled.div``; 

export const Img = styled.div`
    img{
        width: 100%; 
        width: 480px;
    }
`; 

export const Form = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.purple};
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 40px;

    h2{
        font-size: 49.12px; 
        line-height: 1.13;
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
        line-height: 1.315;
    }
`; 

export const ButtonWrapper = styled.div`
    text-align: center;
    
    button{
        width: 360px;
    }
`; 

export const Small = styled.div`
    text-align: center; 
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    line-height: 1.315;
    margin-top: 16px;
`;