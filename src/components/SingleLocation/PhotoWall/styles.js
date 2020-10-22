import styled from '@emotion/styled';

export const Wall = styled.div`
    padding: 56px 0;
`; 

export const Grid = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

export const Tile = styled.div`
    width: 120px; 
    height: 120px;
    margin: 0 8px 16px 8px;
    
    img{
        width: 100%; 
        height: 100%; 
        object-fit: cover;
        border-radius: 12px;
    } 
    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        width: 206px; 
        height: 206px;        
    }
    
`;