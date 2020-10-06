import styled from '@emotion/styled';

const Links = styled.div`
    display: flex; 
    align-items: center;
    padding: 0 0 21px;
`;

export const LinkList = styled.ul`
    flex: 1 0 0px;
    margin: 0 ; 
    padding: 0; 
    list-style: none;
`;

export const LinkItem = styled.li`
    padding: 6px 0;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1;
    position: relative; 
    padding: 0 0 0 16px;

    &:after{
        content: ""; 
        position: absolute; 
        width: 2px; 
        top: 0; 
        bottom: 0; 
        left: 0;
        background-color: ${({ theme }) => theme.colors.secondary};
        transition: 0.3s all ease;
    }

    &:hover{
        &:after{
            width: 10px;
            background-color: ${({ theme }) => theme.colors.accent};
        }
    }
`;

export default Links;