import styled from '@emotion/styled';

export const CardContainer = styled.a`
    border-radius: 12px;
    margin: 0 16px 0 0;
    padding: 20px 24px 24px;
    position: relative;
    cursor: pointer;
    display: block;

    &:after{
        content: "";
        position: absolute; 
        top: 0; 
        bottom: 0; 
        left: 0; 
        right: 0;
        border-radius: 12px;
        background: linear-gradient(0deg, rgba(12, 12, 54, 0.5) 47.42%, rgba(0, 0, 0, 0.2) 97.37%);
        z-index: -1;
    }
`;    

export const Image = styled.img`
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0; 
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
`;

export const CardContent = styled.div`
    height: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`; 