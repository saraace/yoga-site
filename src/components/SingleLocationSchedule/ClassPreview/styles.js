import styled from '@emotion/styled';

export const Preview = styled.div`
    padding: 46px 48px 0;
    background: #152339;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
`;

export const Image = styled.img`
    position: absolute; 
    width: 100%; 
    top: 0; 
    left: 0; 
    border-radius: 12px;
`; 

export const Wrapper = styled.div`
    position: relative; 
    z-index: 1;
`; 

export const Info = styled.div`
    padding: 0 0 48px;
`;

export const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[7]+'px'}; 
    line-height: 1.115;
    font-weight: 600;
`;

export const ClassDetails = styled.div`
    line-height: 1;
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    font-weight: 500;
    margin: 50px 0 30px;

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
        //margin-bottom: 80px;
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

export const ClassInformation = styled.div`
    display: flex;
    padding: 62px 0 0 45px;
`; 

export const Description = styled.div`
    flex-basis: 300px;
    margin: 0 100px 0 0;
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