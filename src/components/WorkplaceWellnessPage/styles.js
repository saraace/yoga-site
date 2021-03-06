import styled from '@emotion/styled';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 0 100px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 0 0 125px 0;
        flex-direction: row;
    }
    
    &.mobile-reverse{
        flex-direction: column-reverse;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            flex-direction: row;
        }
    }
`;

export const Intro = styled(Section)`
    border-top: 1px solid rgba(255, 255, 255, 0.24);
    padding: 65px 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 65px 0 150px;
    }

    h2{
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'}; 
        line-height: 1.255; 
        font-weight: 300;
    }
    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.4;
    }
    .emblem{
        & > div{
            margin: 0 auto 20px;

            @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
                margin: 0 20px 0 0;
            }
        }
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

export const Image = styled.div`
    border-radius: 12px;
    height: 400px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 565px;
        height: 339px;   
    }

    img{
        width: 100%; 
        height: 100%; 
        object-fit: cover;
        border-radius: 12px;
    }
`;

export const SingleImage = styled(Image)`
    height: 339px; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 450px; 
        height: 280px; 
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[3]}){
        width: 570px; 
        height: 339px; 
    }
`; 

export const Section01 = styled(Section)`
    .imageCol{
        padding: 0 0 40px 0;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            padding: 0 40px 0 0;
        }
    }
`; 

export const Section02 = styled(Section)`
    .imageCol{
        padding: 0 0 40px 0;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            padding: 0 0 0 40px;
        }
    }
`; 

export const ButtonRow = styled.div`
    dislay: flex; 
    margin: 50px 0 0; 

    & > a{
        margin: 0 20px 10px 0;
        display: inline-block;
    }
`; 

export const FormSection = styled.div``; 

export const FormIntro = styled.div`
    h3{
        font-weight: 300;
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'}; 
        line-height: 1.255;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            width: 80%;
        }
    }
    p{
        margin: 0 0 100px;
    }
    h2{
        margin: 0 0 50px;
    }
`; 