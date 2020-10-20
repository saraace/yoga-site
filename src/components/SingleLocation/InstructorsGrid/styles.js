import styled from '@emotion/styled';

export const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

export const Instructor = styled.div`
    width: calc(100% / 5);
    margin: 0 0 32px 0;

    img{
        margin: 0 0 8px;
    }
`;

export const Name = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    line-height: 1.4;
`;
