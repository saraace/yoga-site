import styled from '@emotion/styled';

export const Section = styled.div`
    display: flex; 
    padding: 60px 0;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        flex-direction: row;
    }
`;

export const TextCol = styled.div`

    h2{
        font-weight: 600; 
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'}; 
        line-height: 1.255;
    }

    ul{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
        line-height: 1.4;

        li{
            margin: 0 0 31px;
        }
    }
`; 

export const Col = styled.div`
`; 

export const Gallery = styled.div`
    display: flex; 
    justify-content: center;

    & > div{
        width: 272px; 
        height: 272px;
        margin: 0 25px 0 0;
    }
`; 

export const Image = styled.div`
    border-radius: 12px;

    img{
        width: 100%; 
        height: 100%; 
        object-fit: cover;
        border-radius: 12px;
    }
`;

export const SingleImage = styled(Image)`
    height: 300px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 450px; 
        height: 280px; 
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[3]}){
        width: 570px; 
        height: 339px; 
    }
`; 

export const Model = styled.div`
    width: 450px;
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: block;
    }
    
    img{
        width: 100%;
    }
`; 

export const Section01 = styled(Section)`
    border-top: 1px solid rgba(255, 255, 255, 0.24);
    position: relative;

    &:before{
        content: ""; 
        position: absolute; 
        top: -200px; 
        bottom: 100px; 
        right: -100px;
        width: 800px; 
        opacity: 0.8;
        z-index: -1;
        background-image: url(/images/locations/bg-safety.png);
        background-repeat: no-repeat;
        background-size: contain; 
        background-position: center center;
    }
`;

export const Section02 = styled(Section)`
    .imageCol{
        padding: 40px 0 0;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            padding: 0 0 0 40px;
        }
    }
`; 

export const Section03 = styled(Section)`
    position: relative;
    flex-direction: column-reverse; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        flex-direction: row;
    }

    .imageCol{
        padding: 40px 0 0 0;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            padding: 0 40px 0 0;
        }
    }

    &:before{
        content: ""; 
        position: absolute; 
        top: 100px; 
        bottom: -200px; 
        left: -100px;
        width: 800px; 
        opacity: 0.8;
        z-index: -1;
        background-image: url(/images/locations/bg-safety-2.png);
        background-repeat: no-repeat;
        background-size: contain; 
        background-position: center center;
    }
`;

export const Section04 = styled(Section)`
    h2{
        font-weight: 600; 
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'}; 
        line-height: 1.255;
    }

    h3{
        font-weight: 300;
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'}; 
        line-height: 1.255;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            width: 80%;
        }
    }
`;

export const FlexSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column; 

    @media (min-width: ${({ theme }) => theme.breakpoints[3]}){
        flex-direction: row;
    }
`;