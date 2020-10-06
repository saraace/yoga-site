import styled from '@emotion/styled';

const NavMenu = styled.ul`
    margin: 0; 
    padding: 0; 
    list-style: none;
    display: flex;
    align-items: center; 
    justify-content: center;
`;

export const NavItem = styled.li`
    margin: 0 3px;
`;

export const NavLink = styled.a`
    text-decoration: none; 
    color: ${({ theme }) => theme.colors.secondary};
    padding: 10px 25px; 
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    text-transform: uppercase;
    letter-spacing: 0.045em;
    position: relative;
    transition: 0.3s all ease;

    &:after{
        content: "";
        position: absolute;
        bottom: 0; 
        left: 3px;
        right: 3px;
        height: 2px;
        background-color:  ${({ theme }) => theme.colors.accent};
        transition: 0.3s all ease;
        transform: scaleX(0);
        transform-origin: left center;
    }

    &:hover{
        opacity: 0.6;
        &:after{
            transform: scaleX(1);
        }
    }
`;

export const Dropdown = styled.div`
    border: 1px solid red;
    display: none;
`;

export default NavMenu;