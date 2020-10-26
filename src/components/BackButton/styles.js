import styled from '@emotion/styled';

export const BackLink = styled.a`
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
    line-height: 1.4; 
    font-weight: 400;
    margin: 0 0 40px;
    cursor: pointer;
    transition: 0.3s all ease;

    svg{
        width: 22px;
        height: 22px;
        margin: 0 13.5px 0 0; 
    }

    &:hover{
        text-decoration: underline; 
        opacity: 0.7;
    }
`;