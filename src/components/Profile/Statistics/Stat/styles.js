import styled from '@emotion/styled';

export const StatButton = styled.div`
    width: 327px;
    background: rgba(11, 22, 38, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.24); 
    border-radius: 12px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 24px;
`;

export const Col = styled.div`
    svg{
        width: 6px;
    }
`;

export const Title = styled.h4`
    color: ${({ theme }) => theme.colors.highlight}; 
    font-weight: 400; 
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
`;

export const Metric = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
    line-height: 1.255;
    font-weight: 600;

    span{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
        font-weight: 400;
        opacity: 0.7;
        margin: 0 0 0 5px;
    }
`;

