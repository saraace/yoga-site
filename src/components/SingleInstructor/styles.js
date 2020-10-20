import styled from '@emotion/styled';

export const Instructor = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
    padding: 0 0 40px;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
    }
`; 

export const Image = styled.div`
    width: 100%;
    max-width: 336px; 
    height: 345px; 
    margin: 0 0 30px;

    img{
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        border-radius: 12px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        margin: 0 40px 0 0;
    }
`; 

export const Details = styled.div`
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        text-align: left;
    }
`; 

export const Name = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes[5]+'px'}; 
    line-height: 1.114em;
    font-weight: 600;
    margin: 0 0 16px;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        font-size: ${({ theme }) => theme.fontSizes[7]+'px'}; 
        line-height: 1.114em;
        margin: 0 0 32px;
    }
`; 

export const Title = styled.div`
    font-size: 14px; 
    line-height: 1.4em;
    font-weight: 400; 
    margin: 0 0 32px;

    a{
        font-weight: 700; 
        text-decoration: underline;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        font-size: 18px; 
    }
`; 

export const Bio = styled.div`
    padding: 56px 0;
    display: flex; 
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;

    p{
        margin: 14px 32px 14px 0;

        &:last-child{
            margin: 14px 0;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
            max-width: 380px;
        }

        @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
            max-width: 412px;
            margin: 0;
            &:last-child{
                margin: 0;
            }
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;        
    }
`; 

export const Location = styled.div``; 

export const SectionTitle = styled.h3`
    position: relative; 
    margin-bottom: 16px;
`; 

export const Map = styled.div`
    background #2c4263; 
    width: 100%; 
    height: 310px;
    border-radius: 8px;
`; 
