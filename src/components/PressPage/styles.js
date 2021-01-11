import styled from '@emotion/styled';

export const Section = styled.section`
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    &.last{
        border: 0px;
    }
`;

export const Entry = styled.div`
    padding: 55px 0;
    display: flex;
    flex-direction: column;
    
    h2{
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
        line-height: 1.255;
        margin: 0 0 6px 0;
    }

    h3{
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
        line-height: 1.33;
        margin: 0 0 4px; 
    }

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
        line-height: 1.4;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
    }   
`;

export const ImageWrapper = styled.div`
    margin: 0;
    flex: 0 0 282px;
    height: 158px;

    img{
        object-fit: cover;
        width: 100%; 
        height: 100%;
        border-radius: 12px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        margin: 0 21px 0 0;
    }   
`; 

export const CTA = styled.div`
    text-align: center; 
    padding: 145px 0;
    
    h1{
        margin: 0 0 64px;
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
        line-height: 1.255;
        font-weight: 600;
    }
`; 