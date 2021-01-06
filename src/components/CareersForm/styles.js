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
`;

export const Col = styled.div`
    width: 50%;
    padding: 0 10px;
`; 

export const Schedule = styled.div`
    margin: 0 0 42px 0; 
    
    .wrapper{
        display: flex;

        label{
            margin: 0 15px 0 0;
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