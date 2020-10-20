import styled from '@emotion/styled';

export const Instructor = styled.div`
    display: flex;
    border-top: 1px solid rgba(255, 255, 255, 0.24);
    padding: 60px 0 0;
`; 

export const ImageContainer = styled.div`
    max-width: 336px; 
    margin: 0 32px 0 0;

    img{
        border-radius: 12px;
    }
`; 

export const Bio = styled.div`
    p{
        margin: 0 0 24px 0;
        &:last-child{
            margin: 0;
        }
    }
`; 

export const Name = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes[5]+'px'};
    line-height: 1em;
    margin: 0 0 7px;
    text-transform: uppercase; 
    font-weight: 600;
`;

export const Title = styled.div`
    font-size: 18px; 
    line-height: 20.07px; 
    margin: 0 0 24px;
`; 

export const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 32px 0 0 0; 
`;