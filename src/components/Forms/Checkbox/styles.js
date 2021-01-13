import styled from '@emotion/styled';

const CheckboxWrapper = styled.label`
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
                background: ${({ theme }) => theme.colors.success};
                border-color: ${({ theme }) => theme.colors.success};

                svg,path{
                    opacity: 1;
                }
                
            }
        }
    }
`; 

export const CheckboxControl = styled.div`
    flex: 0 0 16px; 
    width: 16px;
    height: 16px; 
    border: 1px solid red;
    border: 2px solid #fff; 
    border-radius: 1px;
    position: relative; 
    opacity: 0.6;
    margin: 0 7px 0 0;
    transition: 0.3s all ease; 

    svg, path{
        fill: #fff; 
        width: 11px;
        position: absolute; 
        top: 1px;
        left: 1px;
        opacity: 0;
        transition: 0.3s all ease;
    }
`; 

export const Label = styled.div`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes[1]+'px'};
    line-height: ${({ theme }) => theme.fontSizes[1]+'px'};
`; 

export default CheckboxWrapper;