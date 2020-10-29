import styled from '@emotion/styled';

export const TitleRow = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between;  
    margin: 0 0 16px 0;

    h3{
        margin: 0;
    }
`;

export const Plan = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    height: 202px;
    background: #121e30;
    border: 1px solid rgba(255, 255, 255, 0.24);
    padding: 24px;
    border-radius: 12px;
    margin: 0 0 24px 0;
`; 

export const Subscription = styled.div``; 

export const Title = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    text-transform: uppercase;
`; 

export const FeaturesList = styled.ul`
    margin: 16px 0 0 0; 
    padding: 0; 
    list-style: none;

    li{
        margin-bottom: 12px; 
        &:last-child{
            margin-bottom: 7px;
        }
    }
`; 

export const Feature = styled.li`
    position: relative; 
    margin-left: 30px;
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};

    svg{
        width: 16px;
        position: absolute; 
        top: 3px; 
        left: -30px;
        polygon{
            fill: ${({ theme }) => theme.colors.success};
        }
    }
`;

export const Notice = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'}; 
    font-weight: 500; 
    opacity: 0.7;
`; 
