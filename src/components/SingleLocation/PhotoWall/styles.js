import styled from '@emotion/styled';

export const Wall = styled.div`
    padding: 56px 0;
`; 

export const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const Tile = styled.div`
    width: calc(100% / 4.25); 
    height: 212px;
    margin: 0 0 16px 0;
    
    img{
        width: 100%; 
        height: 100%; 
        object-fit: cover;
        border-radius: 12px;
    }
`;