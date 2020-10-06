import NavMenu, { NavItem, NavLink, Dropdown } from "./styles"; 

const Navigation = () => {
    return (
        <NavMenu>
            <NavItem><NavLink href="#">Shift</NavLink></NavItem>
            <NavItem><NavLink href="#">Classes</NavLink></NavItem>
            <NavItem>
                <NavLink href="#">Locations</NavLink>
                <Dropdown>
                    <ul>
                        <NavItem><NavLink href="#">Single Location</NavLink></NavItem>
                    </ul>
                </Dropdown>
            </NavItem>
            <NavItem><NavLink href="#">Teachers</NavLink></NavItem>
            <NavItem><NavLink href="#">Store</NavLink></NavItem>
        </NavMenu>
    )
  }
  
  export default Navigation;
  