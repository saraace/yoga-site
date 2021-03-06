import styled from '@emotion/styled';

export const ClassTitle = styled.h1`
    font-size: 42px; 
    line-height: 1.14;
    margin: 20px 0 15px;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        font-size: 60px; 
        line-height: 1.14;
        margin: 48px 0 29px;
    }
`;

export const ClassDetails = styled.div`
    line-height: 1;
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    font-weight: 500;
    margin-bottom: 30px;

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

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        margin-bottom: 80px;
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
    flex-direction: column;
    margin: 80px 0 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;         
    }
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
    font-weight: 600;
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
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        width: 350px;
        margin-bottom: 80px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 410px;
    }
`;
