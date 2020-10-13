import styled from '@emotion/styled';

export const RadioButton = styled.label`
    display: flex;
    align-items: center; 
    padding: 15px 19px;
    border: 2px solid #fff;
    border-radius: 12px;
    opacity: 0.5;
    margin: 0 0 16px 0;
    transition: 0.3s all ease;
    cursor: pointer;
    width: 380px;
    position: relative;

    input{
        display: none;
    }

    &:hover{
        opacity: 1;
    }

    &.selected{
        opacity: 1;

        div:after{
            background-color: #fff;
        }

        &.flow, 
        &.follow{
            background-color: ${({ theme }) => theme.colors.danger};
            border-color: ${({ theme }) => theme.colors.danger};

            svg, path{
                fill: ${({ theme }) => theme.colors.text};
            }
        }

        &.fiit{
            background-color: ${({ theme }) => theme.colors.purple};
            border-color: ${({ theme }) => theme.colors.purple};

            svg, path{
                fill: ${({ theme }) => theme.colors.text};
            }
        }

        &.restore{
            background-color: ${({ theme }) => theme.colors.highlight};
            border-color: ${({ theme }) => theme.colors.highlight};

            svg, path{
                fill: ${({ theme }) => theme.colors.text};
            }
        }
    }
`;

export const Icon = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    margin: 0 15px 0 0;

    svg{
        height: 35px;
    }

    &.flow,
    &.follow{
        svg, path{
            fill: ${({ theme }) => theme.colors.danger};
        }
    }

    &.fiit{
        svg, path{
            fill: ${({ theme }) => theme.colors.purple};
        }
    }

    &.restore{
        svg, path{
            fill: ${({ theme }) => theme.colors.highlight};
        }
    }
`; 

export const Label = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    line-height: 1.4; 
    text-transform: uppercase; 
    font-weight: 700;
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

    &.flow{
        &:after{
            background-color: ${({ theme }) => theme.colors.danger};
        }
    }

    &.follow{
        &:after{
            background-color: ${({ theme }) => theme.colors.danger};
        }
    }

    &.fiit{
        &:after{
            background-color: ${({ theme }) => theme.colors.purple};
        }
    }

    &.restore{
        &:after{
            background-color: ${({ theme }) => theme.colors.highlight};
        }
    }
`;

export const Control = styled.div`
    position: absolute;
    right: 19px;

    label{
        div{
            margin: 0;
        }
    }
`;