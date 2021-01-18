import styled from '@emotion/styled';

export const RadioGroup = styled.div`
    .freq{
        width: 370px;
        
        .wrapper{
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
    }
`; 

export const PlanGroup = styled.div`

    & > div{
        width: 100%;

        label{
            max-width: none;

            div.best{
                top: 15px;
            }
        }
    }
`;
