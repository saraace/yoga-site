import styled from '@emotion/styled';

export const Instructor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-top: 1px solid rgba(255, 255, 255, 0.24);
    padding: 60px 0 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
`; 

export const ImageContainer = styled.div`
    img{
        border-radius: 12px;
        width: 100%;

        @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
            width: 336px; 
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        margin: 0 32px 0 0;    
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
    margin: 20px 0 7px;
    text-transform: uppercase; 
    font-weight: 600;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        margin: 0 0 7px;
        text-align: left;
    }
`;

export const Title = styled.div`
    font-size: 18px; 
    line-height: 20.07px; 
    margin: 0 0 24px;
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        text-align: left;
    }
`; 

export const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 32px 0 0 0; 
`;