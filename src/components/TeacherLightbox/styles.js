import styled from '@emotion/styled';

export const Teacher = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0 0 100px 0;
    margin: 0 0 70px 0;
`;

export const ImageWrapper = styled.div`
    flex: 0 0 340px; 
    height: 340px; 
    margin-right: 24px;
    border-radius: 12px;

    img{
        object-fit: cover;
        width: 100%; 
        height: 100%;
        border-radius: 12px;
    }
`;

export const Info = styled.div`
    
`;

export const Name = styled.h2`
    margin: 0 0 15px;
`;

export const Title = styled.div`
    font-size: 18px; 
    margin: 0 0 45px;
`;

export const Quote = styled.div`
    font-weight: 700;
    font-size: 18px; 
    margin: 0 0 10px;
`;

export const Bio = styled.div``;

export const Locations = styled.div``;

export const Location = styled.div`
    margin: 0 0 75px 0;
`;

export const LocationName = styled.h2`
    margin: 0 0 11px 0;
`;

export const Address = styled.div`
    display: flex; 
    align-items: center;
    margin: 0 0 30px 0;


    svg{
        width: 15px;
        margin: 0 10px 0 0;
    }
`;

export const CTA = styled.div`
    text-align: center; 

    div{
        font-weight: 600; 
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
    }
    button{
        width: 350px;
        margin: 30px 0 0 0;
    }
`; 

export const Gallery = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center;
    margin: 0 0 30px 0;
`; 

export const Image = styled.div`
    width: 200px; 
    height: 200px; 
    margin: 0 10px;
    border-radius: 12px;

    img{
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        border-radius: 12px;
    }
`;