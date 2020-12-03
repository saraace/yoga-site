import styled from '@emotion/styled';

export const FullScreen = styled.div`
    height: 100vh;
    display: flex; 
    align-items:center;
    padding: 50px 0 0;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`; 

export const Col = styled.div``; 

export const Phone = styled.div`
    position: relative;

    img{
        width: 520px;
        margin: 0 0 0 -70px;
    }
`; 

export const VideoWrapper = styled.div`
    position: absolute;
    top: 78px; 
    bottom: 100px; 
    left: 46px; 
    right: 126px;
    z-index: -1;
    overflow: hidden;

    video{
        height: 100%;
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