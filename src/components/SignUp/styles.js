import styled from '@emotion/styled';

const SignUpPage = styled.div`
    h1{
        text-align: left;

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            text-align: center;
        }
    }
`; 

export const SignUpForm = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column; 
    align-items: center;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        flex-direction: row;    
        align-items: flex-start;
    }
`; 

export const PlanOptions = styled.div`
    flex: 1 0 0px;
    max-width: 435px;
`; 

export const Plans = styled.div`
    margin: 24px 0 0;
`; 


export const RadioGroup = styled.div`
    .freq{
        display: flex;
        align-items: center;
        justify-content: center;

        & > *{ 
            margin: 0 24px 0 0;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            justify-content: flex-start;
        }
    }
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