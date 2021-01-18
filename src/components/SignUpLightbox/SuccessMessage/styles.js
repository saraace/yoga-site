import styled from '@emotion/styled';

export const Success = styled.div`
    width: 450px;
    margin: 0 auto;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes[5]+'px'}

    p{
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}
    }

    button{
        margin: 50px auto 0;
        width: 278px;
    }
`;