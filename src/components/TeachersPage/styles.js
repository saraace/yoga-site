import styled from '@emotion/styled';

export const Headline = styled.div`
    position: relative;
    height: 400px;
    width: 100%;

    img{
        width: 100%; 
        height: 100%; 
        object-fit: cover;
        border-radius: 12px; 
        line-height: 1;
    }
    h2{
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
        font-weight: 400;
        position: absolute; 
        left: 25px; 
        right: 25px;
        bottom: 20px;
        text-align: center;
        z-index: 1;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
            left: 80px; 
            right: 80px;
            bottom: 53px;
        }
    }

    &::after{
        content: ""; 
        border-radius: 12px;
        position: absolute; 
        top: 0; 
        left: 0; 
        right: 0; 
        bottom: 0;
        background: linear-gradient(180deg, rgba(14, 38, 73, 0) 0%, #0E2649 92.49%);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        height: auto;
    }
`; 

export const Row = styled.div`
    display: flex;
    flex-direction: column; 
    margin: 70px 0;
    
    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        flex-direction: row;
        margin: 100px 0 129px;
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
    width: 100%; 
    height: 300px; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 570px; 
        height: 339px; 
    }
`; 

export const TextCol = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};

    &.right{
        margin: 30px 0 0;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            margin: 0 0 0 60px;
        }
    }
    &.left{
        margin: 0 0 30px;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            margin: 0 60px 0 0;
        }

        h3{
            font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
            font-weight: 400;
            line-height: 1.255;
        }
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0 0 0;

    a{
        margin: 0 0 10px;

        @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
            margin: 0 10px 0 0;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
        margin: 50px 0 0 0;
    }
`;  

export const TeamLeadersSection = styled.div`
    margin: 120px 0 108px;
`; 

export const TeamLeaders = styled.div`
    display: flex;
    flex-direction: column; 

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
    }

    & > a{
        margin: 0 0 20px 0;

        @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
            margin: 0 16px 0 0;
        }
    }
`;

export const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    margin-bottom: 12px;
    font-weight: 700;
`;

export const CTA = styled.div`
    text-align: center; 
    padding: 145px 0;

    p{
        margin: 0 0 27px; 
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
        line-height: 1.33;
        font-weight: 600;
    }
    h1{
        margin: 0 0 64px;
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
        line-height: 1.255;
        font-weight: 600;
    }

`; 