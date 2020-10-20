import styled from '@emotion/styled';

export const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export const Instructor = styled.a`
    display: block;
    width: 165px;
    margin: 0 13px 32px 0;
    text-decoration: none;
    transition: 0.3s all ease;
    cursor: pointer;

    img{
        margin: 0 0 8px;
        max-width: 165px;
        width: 100%;
    }

    &:hover{
        transform: scale(1.05);
    }
`;

export const Name = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    line-height: 1.4;
`;
