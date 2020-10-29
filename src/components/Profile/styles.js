import styled from '@emotion/styled';

export const ProfileBox = styled.div`
    background: linear-gradient(0deg, rgba(29, 46, 72, 0.2), rgba(29, 46, 72, 0.2)), rgba(0, 0, 0, 0.5);
    border-radius: 22px; 
`;

export const Row = styled.div`
    display: flex; 
    border-bottom: 2px solid rgba(255, 255, 255, 0.05);

    &:last-child{
        border: none;
    }
`;

export const Col = styled.div`
    border-right: 2px solid rgba(255, 255, 255, 0.05);
    padding: 40px 32px;

    &:last-child{
        border: none;
    }
`;