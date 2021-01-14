import styled from '@emotion/styled';

const FormSelectWrapper = styled.div`
    margin: 0 0 48px 0;

    &.invalid select{
        border-color: ${({ theme }) => theme.colors.danger};
    }
`;

export const SelectWrapper = styled.div`
    position: relative; 

    .marker{
        width: 16px; 
        position:absolute; 
        top: 12px; 
        left: 28px;
        
        path{
            fill: #fff;
        }
    }

    select.icon-included{
        padding: 13px 24px 13px 56px;
    }

    .arrow{
        position: absolute;
        width: 10px; 
        top: 21px; 
        right: 20px; 
        
        path{
            fill: #fff;
        }
        
        &.disabled{
            display: none;
        }
    }

    &.underline{
        .marker{
            width: 11px;
            top: 13px;
            left: 8px;
        }
        select.icon-included{
            padding: 8px 8px 8px 25px;
        }
    }
`; 

export default FormSelectWrapper;