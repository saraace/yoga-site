import styled from '@emotion/styled';

export const Button = styled.div`
    display: flex; 
    align-items: center; 
    cursor: pointer;
    transition: 0.3s all ease;

    svg{
        width: 14px; 
        margin: 0 13px 0 0;

        path{
            fill: ${({ theme }) => theme.colors.primary};
        }
    }
    & > div{
        display: flex;
        text-transform: uppercase; 
        color: ${({ theme }) => theme.colors.primary};
        line-height: 1;
        font-weight: 700;

        & > div{
            margin: 0 0 0 10px;
        }
    }

    &:hover{
        opacity: 0.5;
    }
`;