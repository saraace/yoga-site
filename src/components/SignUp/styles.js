import styled from '@emotion/styled';

const SignUpPage = styled.div`
    h1{
        text-align: center;
    }
`; 

export const SignUpForm = styled.form`
    display: flex;
    width: 100%;
`; 

export const PlanOptions = styled.div`
    flex: 1 0 0px;
`; 

export const FormFields = styled.div`
    flex: 1 0 0px;
    max-width: 435px;
`; 

export const ExpDate = styled.div`
    margin: 0 8px 0 0;   
`; 

export const CVC = styled.div`
    margin: 0 0 0 8px;
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


export default SignUpPage;