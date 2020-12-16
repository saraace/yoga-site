import { useSelector } from "react-redux";
import Link from 'next/link'; 
import { NavLink } from 'theme-ui';
import { NavMenu, NavItem } from "./styles"; 

const Navigation = () => {

    const { auth } = useSelector(({ auth }) => auth);
    
    return (
        <NavMenu>
            {!auth && (
            <NavItem>
                <Link href="/shift">
                    <NavLink>Shift</NavLink>
                </Link>
            </NavItem>
            )}
            <NavItem>
                <Link href="/classes">
                    <NavLink>Classes</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/locations">
                    <NavLink>Locations</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href="/teachers">
                    <NavLink>Teachers</NavLink>
                </Link>
            </NavItem>
            {/* <NavItem>
                <Link href="/store">
                    <NavLink>Store</NavLink>
                </Link>
            </NavItem> */}
        </NavMenu>
    )
  }
  
  export default Navigation;
  