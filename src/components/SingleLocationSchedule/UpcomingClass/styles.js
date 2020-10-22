import styled from '@emotion/styled';

export const Button = styled.div`
    display: flex;
    align-items:center;
    background: rgba(0, 0, 0, 0.37);
    border-radius: 12px; 
    margin: 0 0 20px 0;
    cursor: pointer;
    transition: 0.3s all ease;

    &.selected{
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.background};
        box-shadow: 0 0 24px 0 rgba(255, 239, 169, 0.5), rgba(255, 255, 255, 0.4) 0 0 12px 0 inset;

        svg, path, polygon{
            fill: ${({ theme }) => theme.colors.background};
        }
    }
`; 

export const Date = styled.div`
    width: 88px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    text-align: center;
    line-height: 1.115;
    padding: 24px 0;
    border-top-left-radius: 12px; 
    border-bottom-left-radius: 12px;
`; 

export const Month = styled.div`
    text-transform: uppercase;
`; 

export const Day = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[4]+'px'}; 
`; 

export const ClassInfo = styled.div`
    flex-grow: 1;
    padding: 0 0 0 24px;
`; 

export const Title = styled.h3`
    margin: 0 0 10px 0;
`; 

export const Info = styled.div`
    font-weight: 500;
    line-height: 1; 
    opacity: 0.8;
`; 

export const Time = styled(Info)`
    margin: 0 0 6px 0;
`;

export const Instructor = styled(Info)``; 

export const Arrow = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    padding: 0 10px 0 0;

    svg{
        width: 20px; 
        height: 20px;
        transition: 0.3s all ease;
    }
`; 
