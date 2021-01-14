import styled from '@emotion/styled';

export const Careers = styled.div`
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.24);

    h2{
        margin: 46px 0 53px;
    }
`;

export const Gallery = styled.div`
    margin: 80px 0 0;
`; 

export const GalRow = styled.div`
    display: flex;

    img{
        width: 100%;
        border-radius: 12px;
    }

    div{
        line-height: 1;
    }
`; 

export const GalCol1 = styled.div`
    padding: 0 9px 0 0;
`;

export const GalCol2 = styled.div`
    padding: 0 0 0 9px;
`;

export const GalCol3 = styled.div`
    padding: 18px 9px 0 0;
`;

export const GalCol4 = styled.div`
    padding: 18px 0 0 9px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column; 

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
    }
`;

export const Col = styled.div`
    width: 100%;
    padding: 0 10px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 50%;
    }

    & > div{
        margin: 0 0 24px;
    }
`; 

export const Schedule = styled.div`
    margin: 0 0 0 0; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        margin: 0 0 42px 0; 
    }
    
    .wrapper{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            flex-direction: row;
        }

        label{
            margin: 0 0 15px 0;

            @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
                margin: 0 15px 0 0;
            }
        }
    }
`; 

export const TextareaWrapper = styled.div`
    width: 100%;
    padding: 0 10px;

    textarea{
        height: 212px;
    }
`;