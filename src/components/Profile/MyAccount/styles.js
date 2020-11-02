import styled from '@emotion/styled';

export const AccountSettings = styled.div`
    width: 711px; 
    background: #121e30;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 12px;
    padding: 24px 24px 0;
`;

export const AccountPhoto = styled.div`
    display: flex;
    align-items: center;
    width: 64px; 
    height: 64px; 
    object-fit: cover;
    margin: 0 0 24px 0;

    img{
        border-radius: 50%;
    }
`;

export const Photo = styled.div`
    margin: 0 24px 0 0;
`;

export const PhotoControls = styled.div`
    div{
        margin: 8px 0;
    }
`;

export const Row = styled.div`
    display: flex; 
`;

export const Col = styled.div`
    width: 50%;
`;

export const LeftCol = styled(Col)`
    margin: 0 24px 0 0;
`;

export const RightCol = styled(Col)`
    margin: 0 0 0 24px;
`;