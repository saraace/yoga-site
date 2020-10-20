import styled from '@emotion/styled';

export const Section = styled.div`
    padding: 55px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.24);
`; 

export const SectionTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
    line-height: 1.33;
    font-weight: 600;
    margin: 0 0 21px;
`; 

export const Preview = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;        
    }
`; 

export const InstructorWrapper = styled.div`
    width: 100%;

    a{
        display: none;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        margin: 0 64px 0 0;
        width: auto;

        a{
            display: block;
        }
    }
`;

export const Instructor = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 16px;

    img{
        width: 36px; 
        height: 36px; 
        object-fit: cover; 
        border-radius: 50%; 
        margin: 0 16px 0 0;
    }

    div{
        line-height: 1;
        font-weight: 700; 
        text-transform: uppercase;
    }
`;

export const Bio = styled.div`
    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        max-width: 476px;       
    }
`; 

export const MobileButton = styled.div`
    margin-top: 16px;
    display: block;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        display: none;      
    }
`;