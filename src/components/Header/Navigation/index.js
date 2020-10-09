import NavMenu, { NavItem, NavLink, Dropdown } from "./styles"; 
import navigationLinks from "./nav-items";

const Navigation = () => {
    return (
        <NavMenu>
            {navigationLinks.map((navItem, i) => {
                return (
                    <NavItem key={i}>
                        <NavLink href={navItem.link}>{navItem.text}</NavLink>
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
  