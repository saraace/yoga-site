import NavMenu, { NavItem, NavLink, Dropdown } from "./styles"; 
import navigationLinks from "./nav-items";

const Navigation = () => {
    return (
        <NavMenu>
            {navigationLinks.map(navItem => {
                return (
                    <NavItem>
                        <NavLink href={navItem.link}>{navItem.text}</NavLink>
                        {navItem.hasOwnProperty('children') && (
                        <Dropdown>
                            <ul>
                                {navItem.children.map(childItem => {
                                    return(
                                        <NavItem>
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
  