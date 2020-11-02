import styled from '@emotion/styled';

export const MapContainer = styled.div`
    position: relative;
`;

export const Buttons = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;

    a:first-child{
        border-top-left-radius: 16px;
    }

    a:last-child{
        margin: 0 0 0 8px;
        border-bottom-right-radius: 6px;
    }
`; 

export const Button = styled.a`
    background: rgba(0, 0, 0, 0.77);
    color: #fff;
    font-size: 15.63px;
    line-height: 17.74px;
    text-decoration: none;
    padding: 14px 32px;
    display: block;
`;

export const GetDirectionsButton = styled(Button)` 
    z-index: 100;
`;

export const SeeLocationButton = styled(Button)``;