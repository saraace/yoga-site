import styled from '@emotion/styled';

export const PlanWrapper = styled.label`
    display: block;
    border: 1px solid rgba(255, 255, 255, 0.24);
    background: #172234;
    border-radius: 12px;
    padding: 12px 12px 12px 20px;
    max-width: 344px;
    cursor: pointer;
    transition: 0.3s all ease;
    position: relative;

    &.selected{
        background: ${({ theme }) => theme.colors.text}; 
        color: ${({ theme }) => theme.colors.background};
        border-color: ${({ theme }) => theme.colors.text}; 
        box-shadow: 0 0 24px 0 rgba(255, 239, 169, 0.5);  

        input + div{
            border-color: ${({ theme }) => theme.colors.success};
            
            &::after{
                background-color: ${({ theme }) => theme.colors.success};
            }
        }
    }

    &:not(.selected):hover{
        border-color: ${({ theme }) => theme.colors.primary}; 
        box-shadow: 0 0 24px 0 rgba(255, 239, 169, 0.2);       

        .best{
            border-color: ${({ theme }) => theme.colors.primary}; 
        }
    }
`; 

export const Best = styled.div`
    position: absolute; 
    transform: rotate(-90deg);
    transform-origin: 100% 0;
    top: 28px;
    left: -149px;
    width: 120px;
    padding: 5px 11px 3px;
    text-align: center;
    text-transform: uppercase;
    background: #172234;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.24);
    border-top: 1px solid rgba(255, 255, 255, 0.24);
    border-left: 1px solid rgba(255, 255, 255, 0.24);
    border-right: 1px solid rgba(255, 255, 255, 0.24);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    transition: 0.3s all ease;

    &:after{
        content: "";
        position: absolute; 
        height: 3px; 
        background: #172234;
        bottom: -2px;
        right: 0;
        left: 0;
        display: none;
    }

    &.selected{
        background: ${({ theme }) => theme.colors.text}; 
        border-color: ${({ theme }) => theme.colors.text}; 
        border-bottom: 1px dashed #172234;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`; 

export const Title = styled.div`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
`; 

export const Select = styled.div`
    display: flex;
    align-items: center;
`; 

export const Price = styled.div`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
    margin: 0 16px 0 0;
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