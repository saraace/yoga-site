import styled from '@emotion/styled';

export const FullScreen = styled.div`
    height: 100vh; 
    background-image: url(/images/homepage/scene-10-fiit/bg-fiit.png); 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center center;
    display: flex; 
    align-items: flex-end;
`; 

export const ContentContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    padding: 85px 105px;
    width: 100%;
`; 

export const Intro = styled.div`
    width: 40%;

    svg{
        width: 60px; 
        margin-bottom: 24px;
        
        path, polygon{ 
            fill: ${({ theme }) => theme.colors.text}
        }
    }

    h2{
        font-weight: 700; 
        font-size: 64px; 
        line-height: 1.12;
        margin-bottom: 21px;
    }

    p{
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
        line-height: 1.315;
        position: relative;
        margin: 0 0 0 9px;
        padding: 30px 0 0 0;

        &::before{
            content: ""; 
            position: absolute; 
            width: 146px;
            height: 6px; 
            background: ${({ theme }) => theme.colors.fiit};
            left: 0; 
            top: 0px;
        }
    }
`; 

export const Benefits = styled.div`
    width: 40%;
    align-self: flex-end;
`; 

export const List = styled.ul`
    list-style: none; 
    margin: 0; 
    padding: 0;
`; 

export const ListItem = styled.li`
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'}; 
    line-height: 1.315;
    position: relative; 
    margin: 0 0 50px 0;

    &::before{ 
        content: ""; 
        position: absolute;
        width: 45px; 
        height: 5px; 
        background: ${({ theme }) => theme.colors.primary};
        left: -77px;
        top: 10px;
    }
`; 
