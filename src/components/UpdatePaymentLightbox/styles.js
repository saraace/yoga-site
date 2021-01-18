import styled from '@emotion/styled';

export const Form = styled.div`
    margin: 0 auto;

    h2{
        text-align: center;
        width: 500px;
        margin: 0 auto 30px;
    }

    p{
        text-align: center;
        width: 420px;
        margin: 0 auto 50px;
    }

    form{
        width: 430px;
        margin: 0 auto;
    }
`;

export const Row = styled.div`
    display: flex; 
`;

export const LeftCol = styled.div`
    flex-basis: 50%;
    margin: 0 10px 0 0;
`; 

export const RightCol = styled.div`
    flex-basis: 50%;
    margin: 0 0 0 10px;
`; 

export const Terms = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
    font-weight: 400; 
    line-height: 1.4;
    margin: 0 0 24px;
    span{
        font-weight: 600;
    }
`; 

export const Address1 = styled.div`
    width: 80%;
    padding: 0 20px 0 0;
`; 