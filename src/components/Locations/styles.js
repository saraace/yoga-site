import styled from '@emotion/styled';

export const LocationsWrapper = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.24);
    display: flex;
    flex-wrap: wrap;
    padding: 85px 0;
`;

export const CardWrapper = styled.div`
    padding: 0 10px;
    margin: 0 0 20px 0;
    width: 50%; 
    height: 350px;

    h3{
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
        line-height: 1.33;
        margin: 0;
    }
`; 

export const Safety = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0 100px;

    h3{
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
        line-height: 1.255;
        font-weight: 600;
        margin: 0 0 43px;
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
        line-height: 1.4;
        margin: 0 0 43px;
    }
`;

export const TextCol = styled.div`
    h3{
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'}; 
        line-height: 1.255; 
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.4;
    }
    a.link{
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
    }
`;

export const Model = styled.div`
    position: relative;
    text-align: right;
    flex: 0 0 50%;

    img{
        width: 500px;
    }
`;

export const Bg = styled.img`
    position: absolute;
    height: 100%;
    width: 100% !important;
    object-fit: contain;
    z-index: -1;
`;

export const CTA = styled.div`
    a{
        display: inline-block;
    }
`;
