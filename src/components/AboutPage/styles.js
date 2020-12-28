import styled from '@emotion/styled';

export const Headline = styled.h2`
    font-weight: 400; 
`; 

export const Row = styled.div`
    display: flex;
    margin: 100px 0 129px;
`;

export const Col = styled.div`
    img{
        border-radius: 12px;
    }
`;

export const TextCol = styled.div`
    &.right{
        margin: 0 0 0 60px;
    }
    &.left{
        margin: 0 60px 0 0;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
`;