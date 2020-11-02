import styled from '@emotion/styled';

export const SingleFieldForm = styled.form`
    display: flex;
    align-items: flex-end;
    margin: 0 0 16px 0;

    button{
        padding-right: 0 !important;
    }
`;

export const Field = styled.div`
    flex-grow: 1; 

    & > div{
        margin: 0;
    }

    .arrow{
        right: 10px !important;
    }
`;