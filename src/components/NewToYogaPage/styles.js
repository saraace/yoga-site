import styled from '@emotion/styled';

export const Section = styled.section`
    display: flex;
    padding: 0 0 125px 0;
`;

export const Intro = styled(Section)`
    border-top: 1px solid rgba(255, 255, 255, 0.24);
    padding: 65px 0 150px;

    h2{
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'}; 
        line-height: 1.255; 
        font-weight: 300;
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.4;
    }
`;

export const Emblem = styled.div`
    width: 175px;
    height: 175px;
    margin: 0 71px 0 0;

    svg{
        width: 100%;
    }
`;

export const Image = styled.div`
    width: 565px;
    height: 339px;

    img{
        width: 100%; 
        border-radius: 12px;
    }
`;

export const RightImage = styled(Image)`
    margin: 0 0 0 71px;
`; 

export const LeftImage = styled(Image)`
    margin: 0 71px 0 0;
`;

export const Col = styled.div``; 

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

export const ButtonRow = styled.div`
    margin: 50px 0 0 0;
`;

export const COVIDSection = styled(Section)`
    align-items: center;
    padding: 100px 0 0;

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

export const Model = styled.div`
    position: relative;

    img{
        width: 300px;
        margin: 0 280px 0 0;
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