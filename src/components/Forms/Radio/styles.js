import styled from '@emotion/styled';

const RadioWrapper = styled.label`
    display: flex;
    flex-direction: row-reverse;
    align-items: center; 
    justify-content: flex-end; 
    cursor: pointer;

    &:hover{
        div{
            opacity: 1;
        }
    }

    input{
        display: none;

        &:checked{
            & + div{
                opacity: 1;
                &::after{
                    background: #fff;
                }
            }
        }
    }
`; 

export const RadioControl = styled.div`
    width: 24px; 
    height: 24px; 
    border: 2px solid #fff; 
    border-radius: 50%; 
    position: relative; 
    opacity: 0.6;
    margin: 0 7px 0 0;
    transition: 0.3s all ease; 

    &::after{ 
        content: ""; 
        width: 16px; 
        height: 16px; 
        background: transparent; 
        border-radius: 50%; 
        position: absolute; 
        top: 2px;
        left: 2px;
    }
`; 

export const Label = styled.div`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
    line-height: ${({ theme }) => theme.fontSizes[1]+'px'};
`; 

export default RadioWrapper;