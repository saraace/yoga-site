import styled from '@emotion/styled';

export const Steps = styled.div`
    display: flex;
    justify-content: space-between;
    width: 242px;
    margin: 0 auto 90px;
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%);
`;

export const Step = styled.div`
    width: 78px; 
    height: 4px; 
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;

    &.on{
        background: rgba(255, 255, 255, 1);
    }
`;