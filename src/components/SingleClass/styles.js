import styled from '@emotion/styled';

export const Video = styled.div`
    width: 100%; 
    height: 600px;
    background: #2c4263;
    margin: 0 auto;
`; 

export const ClassTitle = styled.h1`
    font-size: 60px; 
    line-height: 1.14;
    margin: 48px 0 29px;
`;

export const ClassDetails = styled.div`
    line-height: 1;
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    font-weight: 500;
    margin-bottom: 80px;

    span{
        opacity: 0.8;
        margin: 0 7px 0 0;
        &:after{
            content: "|";
            opacity: 0.5;
            margin: 0 0 0 7px;
        }
        &:last-child{
            &:after{
                display: none;
            }
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        font-size: ${({ theme }) => theme.fontSizes[1]+'px'};  
        font-weight: 700;
        
        span{
            margin: 0 10px 0 0; 
            &:after{
                margin: 0 0 0 10px;
            }
        }
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Col = styled.div`
    margin: 0 45px;
`;

export const Section = styled.div`
    margin-bottom: 33px;
`;

export const SectionTitle = styled.div`
    position: relative; 
    font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
    line-height: 1.33;
    margin-bottom: 3px;

    svg{
        position: absolute; 
        top: 3px; 
        left: -45px;
        height: 22px;
    }
`;

export const SectionContent = styled.div``;

export const Description = styled.div`
    width: 600px;
`;
