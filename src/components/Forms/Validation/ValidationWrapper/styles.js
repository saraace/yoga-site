import styled from '@emotion/styled';

export const Wrapper = styled.div`
    border: 2px solid transparent;
    border-radius: 28px;
    padding: 10px;

    &.invalid{
        border-color: ${({ theme }) => theme.colors.danger};
    }
`; 