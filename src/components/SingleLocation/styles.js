import styled from '@emotion/styled';

export const Location = styled.div`
    padding: 0 0 56px 0;
`;

export const Title = styled.h1`
    font-size: 50px; 
    line-height: 1.114em;
    text-align: center; 
    margin: 0 20px;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        font-size: ${({ theme }) => theme.fontSizes[7]+'px'};   
    }
`;

export const Address = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};   
    line-height: 1.6em; 
    text-align: center;
    margin: 10px 0 32px;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        font-size: 18px;
        line-height: 1.15em; 
        margin: 20px 0 64px;
    }
`;

export const ButtonRow = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;

    button{
        margin: 0 11px 12px;
        display: block;
        width: 100%;

        @media (min-width: ${({ theme }) => theme.breakpoints[0]}){
            margin: 0 11px;
            width: auto;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}){
        flex-direction: row;
    }
`;
 
export const Row = styled.div`
    display: flex;
    flex-direction: column;

    & > div{
        margin: 56px 0 0;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
    }
`;

export const Map = styled.div`
    width: 100%; 
    height: 192px;
    border-radius: 8px;
    background #2c4263;
    margin: 0 100px 0 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        width: 343px; 
    }
`;

export const Services = styled.div`
    display: flex; 
    flex-flow: row wrap;
`;

export const Service = styled.div`
    display: flex; 
    align-items: center;
    margin: 0 64px 35px 0;

    svg{
        height: 40px; 
        margin: 0 24px 0 0;
    }

    span{
        text-transform: uppercase; 
        font-weight: 700; 
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.4;
        position: relative; 
        margin-top: -3px;

        &:after{
            content: "";
            position: absolute; 
            bottom: -3px; 
            height: 4px; 
            border-radius: 8px; 
            left: 0; 
            right: 0; 
            background-color: ${({ theme }) => theme.colors.muted};
        }
    }

    &.yoga{
        span{
            &:after{
                background-color: ${({ theme }) => theme.colors.danger};
            }
        }
        svg, path{
            fill: ${({ theme }) => theme.colors.danger};
        }
    }

    &.fiit{
        span{
            &:after{
                background-color: ${({ theme }) => theme.colors.purple};
            }
        }
        svg, path{
            fill: ${({ theme }) => theme.colors.purple};
        }
    }

    &.restore{
        span{
            &:after{
                background-color: ${({ theme }) => theme.colors.highlight};
            }
        }
        svg, path{
            fill: ${({ theme }) => theme.colors.highlight};
        }
    }
`; 
