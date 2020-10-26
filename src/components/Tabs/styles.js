import styled from '@emotion/styled';

export const TabMenu = styled.ul`
    margin: 0 0 15px; 
    padding: 0; 
    list-style: none; 
    display: flex; 
`;

export const Tab = styled.li`
    opacity: 0.4; 
    position: relative;
    cursor: pointer;
    transition: 0.3s all ease;

    &.default{
        margin: 0 24px 0 0;
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
        line-height: 1.33;
        font-weight: 600;

        &:after{
            content: ""; 
            position: absolute; 
            bottom: -3px; 
            left: 0; 
            right: 0;
            background: ${({ theme }) => theme.colors.text};
            height: 2px;
            transform: scaleX(0);
            transform-origin: left center;
            transition: 0.3s all ease;
        }
    
        &.active{    
            &:after{
                transform: scaleX(1);
            }
        }
    }

    &.sub-tab{
        margin: 0 16px 0 0; 
        font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
        line-height: 1.4; 
        font-weight: bold;
        
    }

    &.button{
        padding: 8px 35px; 
        text-transform: uppercase;
        border-radius: 4px; 
        border: 1px solid #fff;
        margin: 0 16px 0 0;

        &.active{
            background: rgba(255, 255, 255, 0.16);
            border-color: rgba(255, 255, 255, 0.16);
        }
    }

    &:hover{
        opacity: 1;
    }

    &.active{
        opacity: 1;
    }
`;