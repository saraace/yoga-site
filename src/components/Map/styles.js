import styled from '@emotion/styled';

export const MapContainer = styled.div`
    position: relative;
    line-height: 1;
    
    img{
        border-radius: 8px;
    }
`;

export const Buttons = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;

    a:first-of-type{
        border-top-left-radius: 16px;
    }

    a:last-of-type{
        margin: 0 0 0 8px;
        border-bottom-right-radius: 8px;
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