import styled from '@emotion/styled';

export const Instructor = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
    padding: 0 0 40px;
`; 

export const Image = styled.div`
    width: 336px; 
    height: 345px; 
    margin: 0 40px 0 0;

    img{
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        border-radius: 12px;
    }
`; 

export const Details = styled.div``; 

export const Name = styled.h1`
    font-size: 78.01px; 
    line-height: 1.114em;
    font-weight: 600;
    margin: 0 0 32px;
`; 

export const Title = styled.div`
    font-size: 18px; 
    line-height: 1.11em;
    font-weight: 400; 
    margin: 0 0 32px;

    a{
        font-weight: 700; 
        text-decoration: underline;
    }
`; 

export const Bio = styled.div`
    padding: 56px 0;
    display: flex; 
    justify-content: space-between;

    p{
        max-width: 412px;
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
