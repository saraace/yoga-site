import styled from '@emotion/styled';

export const MasonryGrid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-top: 140px;

    & > *:nth-child(3n),
    & > *:nth-child(3n+1){
        margin-top: -86px;
        margin-bottom: 118px;
    }
`; 