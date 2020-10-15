import styled from '@emotion/styled';

export const Radio = styled.label`
    display: block;
    padding: 15px;
    border: 2px solid #fff;
    border-radius: 12px;
    opacity: 0.5;
    margin: 0 16px 0 0;
    text-align: center;
    transition: 0.3s all ease;
    cursor: pointer;

    input{
        display: none;
    }
    
    span{
        font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
        line-height: 1; 
        text-transform: uppercase; 
    }

    &:hover{
        opacity: 1;
    }

    &.selected{
        background: ${({ theme }) => theme.colors.success};
        border-color: ${({ theme }) => theme.colors.success};
        opacity: 1;
    }
`;