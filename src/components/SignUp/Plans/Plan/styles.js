import styled from '@emotion/styled';

const PlanWrapper = styled.label`
    display: block;
    border: 1px solid rgba(255, 255, 255, 0.24);
    background: #172234;
    border-radius: 12px;
    padding: 12px 12px 12px 20px;
    max-width: 344px;
`; 

export const PlanFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`; 

export const PlanTitle = styled.div`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
`; 

export const PlanSelect = styled.div`
    display: flex;
    align-items: center;
`; 

export const PlanPrice = styled.div`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
    margin: 0 16px 0 0;
`; 


export default PlanWrapper;