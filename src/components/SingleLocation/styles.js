import styled from '@emotion/styled';

export const Location = styled.div`
    padding: 0 0 56px 0;
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes[7]+'px'}; 
    line-height: 1.114em;
    text-align: center; 
    margin: 0 20px;
`;

export const Address = styled.div`
    font-size: 18px; 
    line-height: 1.15em; 
    text-align: center;
    margin: 20px 0 64px;
`;

export const ButtonRow = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center;

    button{
        margin: 0 11px;
    }
`;
 
export const Row = styled.div`
    display: flex;
    margin: 56px 0 0;
`;

export const Map = styled.div`
    width: 343px; 
    height: 192px;
    border-radius: 8px;
    background #2c4263;
    margin: 0 100px 0 0;
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
