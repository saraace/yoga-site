import styled from '@emotion/styled';

export const Card = styled.div`
    width: 565px; 
    height: 633px;
    margin: 0 24px 0 0;
    background: rgba(0, 0, 0, 0.17);
    border-radius: 28px;
    padding: 16px;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
`;

export const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h4`
    font-size: 32px; 
    line-height: 40.16px;
    font-weight: 700;
`;

export const Date = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
    line-height: 1.33;
    font-weight: 600;
`;

export const Description = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
    line-height: 1.33;
`;

export const ClassCards = styled.div`
    position: relative; 
    z-index: 1;
`;
