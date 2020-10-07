import styled from '@emotion/styled';

const FormSelectWrapper = styled.div`
    margin: 0 0 48px 0;
`;

export const SelectWrapper = styled.div`
    position: relative; 

    .marker{
        width: 16px; 
        position:absolute; 
        top: 12px; 
        left: 28px;
    }

    select.icon-included{
        padding: 13px 24px 13px 56px;
    }

    .arrow{
        position: absolute;
        width: 10px; 
        top: 21px; 
        right: 20px; 
    }
`; 

export default FormSelectWrapper;