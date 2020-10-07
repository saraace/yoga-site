import styled from '@emotion/styled';

export const PasswordContainer = styled.div``;

export const Requirements = styled.div`
  display: flex;
  margin: 0 0 49px;
`;

export const ReqCol = styled.ul`
    margin: 0; 
    padding: 0; 
    list-style: none;
    margin: 0 10px 0 25px;
`; 

export const Req = styled.li`
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
    margin: 0 0 0 8px;
    position: relative; 

    &::after{
        content: ""; 
        position: absolute;
        width: 8px; 
        height: 8px; 
        border-radius: 50%; 
        background-color: #fff;
        top: 6px; 
        left: -16px;
        transition: 0.3s all ease;
    }

    &.valid{
        &::after{
            background-color: ${({ theme }) => theme.colors.success};
        }
    }

    &.invalid{
        &::after{
            background-color: ${({ theme }) => theme.colors.danger};
        }
    }
`;
