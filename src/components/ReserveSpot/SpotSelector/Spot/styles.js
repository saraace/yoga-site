import styled from '@emotion/styled';

export const SpotOption = styled.label`
    text-align: center;
    cursor: pointer;

    &.taken{
        &:hover{
            cursor: not-allowed;
        }
    }

    &:hover{
        .mat.available{
            background-color: #404957;
        }
    }

    input{
        display: none;

        &:checked{
            & + .mat{
                background-image: url(/images/reserve-spot/selected-mat.jpg);
            }
        }
    }
    
`;

export const Label = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    line-height: 1.135;
    margin: 10px 0 0;
`;

export const Mat = styled.div`
    width: 56px; 
    height: 80px; 
    border-radius: 4px; 
    border: 2px solid #404957;
    background-size: cover;
    background-position: center center;
    transition: 0.3s all ease;

    &.taken{
        background-image: url(/images/reserve-spot/unavailable-mat.png);
    }

    &.selected{
        background-image: url(/images/reserve-spot/selected-mat.jpg);
    }
`; 