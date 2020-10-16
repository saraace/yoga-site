import Link from 'next/link'; 
import { NavLink } from 'theme-ui';
import NavMenu, { NavItem, Dropdown } from "./styles"; 
import navigationLinks from "./nav-items";

const Navigation = () => {
    return (
        <NavMenu>
            {navigationLinks.map((navItem, i) => {
                return (
                    <NavItem key={i}>
                        <Link href={navItem.link}>
                            <NavLink>{navItem.text}</NavLink>
                        </Link>
                        {navItem.hasOwnProperty('children') && (
                        <Dropdown>
                            <ul>
                                {navItem.children.map((childItem, idx) => {
                                    return(
                                        <NavItem key={idx}>
                                            <NavLink href={childItem.link}>{childItem.text}</NavLink>
                                        </NavItem>
                                    )
                                })}
                            </ul>
                        </Dropdown>
                        )}
                    </NavItem> 
                );
            })}
        </NavMenu>
    )
  }
  
  export default Navigation;
  