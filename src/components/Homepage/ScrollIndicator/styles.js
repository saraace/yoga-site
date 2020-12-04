import styled from "@emotion/styled";

export const LargeCircle = styled.div`
    width: 122px; 
    height: 122px; 
    background: rgba(255, 255, 255, 0.2); 
    position: fixed;
    bottom: -61px;
    left: 50%; 
    transform: translateX(-50%);
    z-index: 10;
    border-radius: 50%;
`;

export const SmallCircle = styled.div`
    width: 84px; 
    height: 84px; 
    background: rgba(255, 255, 255, 0.5); 
    border-radius: 50%; 
    position: absolute;
    top: 19px;
    left: 19px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    svg{
        width: 17px;
        padding: 14px 0 0 0;
    }
`;