import styled from '@emotion/styled';

export const Name = styled.h4`
    font-weight: 700;
`; 

export const Title = styled.div`
    line-height: 1.4;
    margin: 0 0 10px;
    position: relative; 

    &:after{
        content: ""; 
        position: absolute; 
        bottom: -14px; 
        left: 0;
        height: 4px;
        width: 40px; 
        border-radius: 27px; 
        background-color: ${({ theme }) => theme.colors.purple};
    }
`; 

export const Classes = styled.div`
    line-height: 1.4; 
    padding: 14px 0 0;
`; 