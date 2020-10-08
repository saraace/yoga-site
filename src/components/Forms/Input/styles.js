import styled from '@emotion/styled';

const FormInputWrapper = styled.div`
    margin: 0 0 24px 0;

    &.invalid input{
        border-color: ${({ theme }) => theme.colors.danger};
    }
`;

export default FormInputWrapper;